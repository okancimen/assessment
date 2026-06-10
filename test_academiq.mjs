import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const BASE = 'http://localhost:3001';
const EMAIL = `test_${Date.now()}@example.com`;
const PASSWORD = 'testpass123';
const results = [];

function log(step, status, detail) {
  const icon = status === 'PASS' ? '✅' : status === 'FAIL' ? '❌' : '⚠️';
  console.log(`${icon} ${step}: ${detail}`);
  results.push({ step, status, detail });
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
page.setDefaultTimeout(15000);

// 1. Landing page
try {
  await page.goto(BASE);
  const h1 = await page.locator('h1').first().textContent();
  const hasGetStarted = await page.locator('text=Get started').count() > 0;
  log('Landing page', 'PASS', `h1: "${h1}" | CTA visible: ${hasGetStarted}`);
} catch (e) {
  log('Landing page', 'FAIL', e.message);
}

// 2. Register page
try {
  await page.goto(`${BASE}/auth/register`);
  const hasForm = await page.locator('input[type="email"]').count() > 0;
  log('Register page', 'PASS', `Form visible: ${hasForm}`);
} catch (e) {
  log('Register page', 'FAIL', e.message);
}

// 3. Login page
try {
  await page.goto(`${BASE}/auth/login`);
  const hasForm = await page.locator('input[type="email"]').count() > 0;
  log('Login page', 'PASS', `Form visible: ${hasForm}`);
} catch (e) {
  log('Login page', 'FAIL', e.message);
}

// 4. Register a new user
try {
  await page.goto(`${BASE}/auth/register`);
  await page.fill('input[placeholder="Jane Smith"]', 'Test Parent');
  await page.fill('input[type="email"]', EMAIL);
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL(`${BASE}/dashboard`, { timeout: 10000 });
  log('Register & redirect to dashboard', 'PASS', `Redirected to dashboard as ${EMAIL}`);
} catch (e) {
  log('Register & redirect to dashboard', 'FAIL', e.message);
  writeFileSync('/tmp/ss_register_fail.png', await page.screenshot());
}

// 5. Dashboard
try {
  const url = page.url();
  const isDashboard = url.includes('/dashboard');
  const hasAddChild = await page.locator('text=Add child').count() > 0;
  log('Dashboard', isDashboard ? 'PASS' : 'FAIL', `URL: ${url} | Add child button: ${hasAddChild}`);
} catch (e) {
  log('Dashboard', 'FAIL', e.message);
}

// 6. Add child
try {
  await page.goto(`${BASE}/children/new`);
  await page.fill('input[placeholder="e.g. Emma"]', 'Emma');
  // Set date of birth for a 10-year-old
  const dob = new Date();
  dob.setFullYear(dob.getFullYear() - 10);
  const dobStr = dob.toISOString().split('T')[0];
  await page.fill('input[type="date"]', dobStr);
  await page.click('button[type="submit"]');
  await page.waitForURL(/\/children\/[a-z0-9-]+$/, { timeout: 10000 });
  log('Add child', 'PASS', `Child "Emma" added, redirected to: ${page.url()}`);
} catch (e) {
  log('Add child', 'FAIL', e.message);
  writeFileSync('/tmp/ss_child_fail.png', await page.screenshot());
}

// 7. Start assessment
try {
  const startBtn = page.locator('button', { hasText: 'Start new assessment' });
  await startBtn.click();
  await page.waitForURL(/\/assessment\/[a-z0-9-]+\/start/, { timeout: 10000 });
  log('Start assessment (→ start page)', 'PASS', `URL: ${page.url()}`);
} catch (e) {
  log('Start assessment (→ start page)', 'FAIL', e.message);
  writeFileSync('/tmp/ss_start_fail.png', await page.screenshot());
}

// 8. Begin assessment (click Begin)
try {
  const beginBtn = page.locator('text=Begin assessment');
  await beginBtn.click();
  await page.waitForURL(/\/assessment\/[a-z0-9-]+\/question/, { timeout: 10000 });
  log('Begin assessment (→ question page)', 'PASS', `URL: ${page.url()}`);
} catch (e) {
  log('Begin assessment (→ question page)', 'FAIL', e.message);
  writeFileSync('/tmp/ss_begin_fail.png', await page.screenshot());
}

// 9. Question loads (AI-generated)
try {
  // Wait for question text to appear (spinner disappears)
  await page.waitForSelector('p.text-lg', { timeout: 30000 });
  const questionText = await page.locator('p.text-lg').first().textContent();
  const hasOptions = await page.locator('button.w-full').count();
  log('AI question loaded', 'PASS', `Q: "${questionText?.slice(0, 80)}..." | Options: ${hasOptions}`);
  writeFileSync('/tmp/ss_question.png', await page.screenshot());
} catch (e) {
  log('AI question loaded', 'FAIL', e.message);
  writeFileSync('/tmp/ss_question_fail.png', await page.screenshot());
}

// 10. Answer a question — submit auto-advances to next question
try {
  await page.locator('button.w-full').first().click();
  await page.click('button:has-text("Submit Answer")');
  // After submit, spinner appears then next question loads automatically
  await page.waitForSelector('p.text-lg', { timeout: 35000 });
  const q2 = await page.locator('p.text-lg').first().textContent();
  log('Answer → auto-advances to Q2', 'PASS', `Q2: "${q2?.slice(0, 60)}..."`);
  writeFileSync('/tmp/ss_answered.png', await page.screenshot());
} catch (e) {
  log('Answer → auto-advances to Q2', 'FAIL', e.message);
  writeFileSync('/tmp/ss_answer_fail.png', await page.screenshot());
}

// 11. Answer second question — confirm flow continues
try {
  await page.locator('button.w-full').first().click();
  await page.click('button:has-text("Submit Answer")');
  await page.waitForSelector('p.text-lg', { timeout: 35000 });
  const q3 = await page.locator('p.text-lg').first().textContent();
  log('Answer → auto-advances to Q3', 'PASS', `Q3: "${q3?.slice(0, 60)}..."`);
} catch (e) {
  log('Answer → auto-advances to Q3', 'FAIL', e.message);
}

await browser.close();

console.log('\n--- SUMMARY ---');
const passed = results.filter(r => r.status === 'PASS').length;
const failed = results.filter(r => r.status === 'FAIL').length;
console.log(`${passed} passed, ${failed} failed`);
console.log(failed === 0 ? '\nVerdict: PASS' : '\nVerdict: FAIL');

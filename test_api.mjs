import { chromium } from 'playwright';

const BASE = 'http://localhost:3001';
const EMAIL = `test_${Date.now()}@example.com`;
const PASSWORD = 'testpass123';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
page.setDefaultTimeout(20000);

// Capture all console errors and network failures
page.on('console', msg => {
  if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text());
});
page.on('response', async resp => {
  if (resp.url().includes('/api/') && resp.status() >= 400) {
    try {
      const body = await resp.text();
      console.log(`API ERROR ${resp.status()} ${resp.url()}: ${body}`);
    } catch {}
  }
});

// Register
await page.goto(`${BASE}/auth/register`);
await page.fill('input[placeholder="Jane Smith"]', 'Test Parent');
await page.fill('input[type="email"]', EMAIL);
await page.fill('input[type="password"]', PASSWORD);
await page.click('button[type="submit"]');
await page.waitForURL(`${BASE}/dashboard`, { timeout: 10000 });
console.log('Registered OK');

// Add child
await page.goto(`${BASE}/children/new`);
await page.fill('input[placeholder="e.g. Emma"]', 'Emma');
const dob = new Date();
dob.setFullYear(dob.getFullYear() - 10);
await page.fill('input[type="date"]', dob.toISOString().split('T')[0]);
await page.click('button[type="submit"]');
await page.waitForURL(/\/children\/[a-z0-9-]+$/, { timeout: 10000 });
console.log('Child added OK, at:', page.url());

// Start assessment
await page.click('button:has-text("Start new assessment")');
await page.waitForURL(/\/assessment\/[a-z0-9-]+\/start/, { timeout: 10000 });
console.log('Assessment started, at:', page.url());

// Begin
await page.click('text=Begin assessment');
await page.waitForURL(/\/assessment\/[a-z0-9-]+\/question/, { timeout: 10000 });
console.log('On question page, at:', page.url());

// Wait for question or error
await page.waitForTimeout(35000);
const bodyText = await page.locator('body').textContent();
console.log('Page body:', bodyText?.slice(0, 500));

import { writeFileSync } from 'fs';
writeFileSync('/tmp/ss_question_debug.png', await page.screenshot());

await browser.close();

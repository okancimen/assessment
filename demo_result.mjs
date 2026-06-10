import { chromium } from 'playwright'

const BASE = 'http://localhost:3001'
const EMAIL = `demo_${Date.now()}@test.com`
const PASS = 'TestPass123!'
const CHILD_NAME = 'Alex Johnson'
const CHILD_DOB = '2014-03-15'

async function run() {
  const browser = await chromium.launch({ headless: true })
  const ctx = await browser.newContext()
  const page = await ctx.newPage()
  page.setDefaultTimeout(45000)
  page.on('console', msg => { if (msg.type() === 'error') console.log('BROWSER ERROR:', msg.text()) })
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message))

  // 1. Register
  console.log('Registering...')
  await page.goto(`${BASE}/auth/register`)
  await page.waitForLoadState('networkidle')
  await page.locator('input[placeholder="Jane Smith"]').fill('Demo Parent')
  await page.locator('input[type="email"]').fill(EMAIL)
  await page.locator('input[type="password"]').fill(PASS)
  await page.locator('button[type="submit"]').click()
  await page.waitForURL(`${BASE}/dashboard`, { timeout: 20000 })
  console.log('✓ Registered')

  // 2. Add child
  console.log('Adding child...')
  await page.goto(`${BASE}/children/new`)
  await page.waitForLoadState('networkidle')
  await page.locator('input[placeholder="e.g. Emma"]').fill(CHILD_NAME)
  await page.locator('input[type="date"]').fill(CHILD_DOB)

  await page.screenshot({ path: 'debug_child_form.png' })

  await page.locator('button[type="submit"]').click()
  // Wait for URL that's NOT /children/new (i.e. redirected to /children/[uuid])
  await page.waitForURL(url => url.toString().includes('/children/') && !url.toString().endsWith('/new'), { timeout: 20000 })
  console.log('✓ Child added, redirected to:', page.url())

  // 3. Go to child profile, click Start Assessment
  const childId = page.url().split('/children/')[1]
  await page.goto(`${BASE}/children/${childId}`)
  await page.waitForLoadState('networkidle')
  await page.screenshot({ path: 'debug_dashboard.png', fullPage: true })

  // Listen to API response
  const apiResponsePromise = page.waitForResponse(r => r.url().includes('/api/assessments') && r.request().method() === 'POST', { timeout: 15000 })
  const startBtn = page.locator('button:has-text("assessment"), a:has-text("assessment")').first()
  await startBtn.waitFor({ timeout: 15000 })
  await startBtn.click()
  const apiResp = await apiResponsePromise
  const apiBody = await apiResp.json()
  console.log('API /assessments response:', JSON.stringify(apiBody))
  await page.waitForTimeout(2000)
  await page.screenshot({ path: 'debug_after_start.png', fullPage: true })
  console.log('URL after start click:', page.url())
  // Navigate directly since router.push might be failing
  await page.goto(`${BASE}/assessment/${apiBody.id}/start`)
  await page.waitForLoadState('networkidle')
  // Click "Begin assessment" button on the start page
  await page.locator('button:has-text("Begin assessment"), a:has-text("Begin assessment")').click()
  await page.waitForURL(/\/question/, { timeout: 30000 })
  console.log('✓ On question page:', page.url())

  // Intercept the question API call to see the response
  const questionApiPromise = page.waitForResponse(
    r => r.url().includes('/api/assessments') && r.url().includes('/question'),
    { timeout: 45000 }
  )
  const questionApiResp = await questionApiPromise
  const questionApiBody = await questionApiResp.text()
  console.log('Question API status:', questionApiResp.status())
  console.log('Question API response:', questionApiBody.slice(0, 500))
  await page.waitForTimeout(3000)
  await page.screenshot({ path: 'debug_question.png', fullPage: true })
  const radioCount = await page.$$eval('input[type="radio"]', els => els.length)
  const bodyHTML = await page.locator('body').innerHTML()
  console.log('Radio count in DOM:', radioCount)
  console.log('Body HTML snippet:', bodyHTML.slice(0, 800))

  // Options are styled <button> elements (not radio inputs).
  // Each option button has a letter badge span (A/B/C/D).
  const optionSelector = 'button.border-2'

  // 4. Answer questions — there may be subject-break screens between subjects
  let qAnswered = 0
  for (let attempt = 0; attempt < 12 && qAnswered < 4; attempt++) {
    // Wait for either an option button or a "Continue to..." button (subject break)
    await page.waitForSelector(`${optionSelector}, button:has-text("Continue to")`, { timeout: 35000 })
    await page.waitForTimeout(300)

    const continueBtn = page.locator('button:has-text("Continue to")').first()
    if (await continueBtn.isVisible()) {
      console.log('  Subject break — clicking Continue')
      await continueBtn.click()
      continue
    }

    const options = await page.$$(optionSelector)
    if (!options.length) continue
    const pick = Math.floor(Math.random() * options.length)
    await options[pick].click()
    console.log(`  Q${qAnswered + 1}: option ${pick} of ${options.length}`)

    await page.locator('button:has-text("Submit Answer")').click()
    qAnswered++

    if (page.url().includes('/results/')) break
    // Wait for page to transition (options disappear)
    await page.waitForFunction(() =>
      document.querySelectorAll('button.border-2').length === 0
    , { timeout: 20000 }).catch(() => {})
  }

  console.log(`Answered ${qAnswered} questions. URL:`, page.url())

  // 5. Results page
  if (!page.url().includes('/results/')) {
    await page.waitForURL(/\/results\//, { timeout: 30000 })
  }
  console.log('✓ Results URL:', page.url())
  await page.waitForSelector('text=Subject scores', { timeout: 15000 })
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(800)
  await page.screenshot({ path: 'demo_result.png', fullPage: true })
  console.log('✓ Screenshot saved: demo_result.png')
  await browser.close()
}

run().catch(err => {
  console.error('FAILED:', err.message)
  process.exit(1)
})

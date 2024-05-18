import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('check home page', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('[data-textid="slider"]')).toBeVisible()

  await page.waitForSelector('[data-testid="list-by-genre"]')

  const genreLists = await page.locator('[data-testid="list-by-genre"]').all()

  await expect(genreLists.length).toBe(2)
})

test('check details page', async ({ page }) => {
  await page.goto('/details/1')

  await expect(page.locator('[data-testid="poster"]')).toBeVisible()

  const headerElement = page.locator('h1.title')
  await expect(headerElement).toBeVisible()
  await expect(headerElement).toContainText('Under the Dome')

  const thumbnailElement = page.locator('[data-testid="thumbnail"]')
  await expect(thumbnailElement).toBeVisible()

  await expect(page.locator('button.btn-back')).toBeVisible()
  await expect(page.locator('.summary')).toBeVisible()
  await expect(page.locator('.box').first()).toBeVisible()

  await expect(page.locator('.title-section')).toBeVisible()
  await expect(page.locator('.title-section .title')).toContainText('Casts')
})

test('check search page', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('input.search-input')).toBeVisible()

  await page.fill('input.search-input', 'happy')
  await page.keyboard.press('Enter')

  await page.waitForURL('**/search?q=happy')

  await expect(page.locator('.title-section .title')).toContainText("Search results for 'happy'")

  const list = await page.locator('.container .item').all()
  await expect(list.length).toBeGreaterThan(0)
})

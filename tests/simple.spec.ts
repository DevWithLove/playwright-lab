import { test, expect } from '@playwright/test'

test('Google search works', async ({ page }) => {
    await page.goto('https://www.google.com');

    //await page.fill('textarea[name="q"]', 'Playwright automation');
    await page.locator('textarea[name="q"]').fill('Playwright testing');

    await page.keyboard.press('Enter');

    // await for reslts to load in 2 seconds
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle(/Playwright/);

    const results = await page.locator('h3').allTextContents();
    expect(results.length).toBeGreaterThan(0);

})
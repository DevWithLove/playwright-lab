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


// test.beforeEach(async ({ page }) => {
//   // Runs before each test and signs in each page.
//   await page.goto('https://github.com/login');
//   await page.getByLabel('Username or email address').fill('username');
//   await page.getByLabel('Password').fill('password');
//   await page.getByRole('button', { name: 'Sign in' }).click();
// });

// test('first', async ({ page }) => {
//   // page is signed in.
// });

// test('second', async ({ page }) => {
//   // page is signed in.
// });
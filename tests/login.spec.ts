import { test, expect } from '@playwright/test';
// run test for tag : npx playwright test --grep @login

test('User is already logged in', {
  tag: '@login',
}, async ({ page }) => {

  const cookies = await page.context().cookies();
  console.log(`cookies: ${JSON.stringify(cookies, null, 2)}`);
  await page.goto('https://the-internet.herokuapp.com/secure');
  await expect(page.locator('h2'))
    .toHaveText('Secure Area');
});

test('debug auth redirect', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure', { waitUntil: 'domcontentloaded' });
  console.log('FINAL URL:', page.url());
  await page.screenshot({ path: 'debug.png', fullPage: true });
});
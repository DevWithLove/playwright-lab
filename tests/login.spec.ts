//import { test, expect } from '@playwright/test';
import { test, expect } from '../fixtures/auth.fixture';
import { LoginPage } from '../pages/login.page';

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

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.locator('#flash'))
    .toContainText('You logged into a secure area');
});

test('User can logout', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await loginPage.logout();

  await expect(page).toHaveURL(/login/);
});

// Use auth fixture
test('use fixture login', async ({ authPage, page }) => {
  await expect(page.locator('h2'))
    .toHaveText('Secure Area');
  await authPage.logout();
  await expect(page).toHaveURL(/login/);
});


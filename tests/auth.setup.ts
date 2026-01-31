import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').fill('tomsmith')
  await page.getByLabel('Password').fill('SuperSecretPassword!')
  await page.click('button[type="submit"]');
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForSelector('#flash');
  await page.waitForURL('https://the-internet.herokuapp.com/secure');

  // End of authentication steps.
  await page.context().storageState({ path: authFile });
});

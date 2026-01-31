import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// With Custom Fixture

type MyFixtures = {
  authPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  authPage: async ({ page }, use) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('tomsmith', 'SuperSecretPassword!');
    
    //“Give this prepared object to the test.”
    await use(login);
  },
});

export { expect } from '@playwright/test';

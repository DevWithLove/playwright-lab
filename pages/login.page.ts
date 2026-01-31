import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly logoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('button[type="submit"]');
        this.logoutBtn = page.locator('a[href="/logout"]');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }
ß
    async logout() {
        await this.logoutBtn.click();
    }
}

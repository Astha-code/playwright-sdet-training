import {Locator, Page} from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('#login-button')
    }

    async login(username: string, password: string) {
       await this.username.fill(username)
       await this.password.fill(password)
        await this.loginBtn.click()
    }

}


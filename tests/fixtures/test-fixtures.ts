import {test as base, Page} from '@playwright/test'
import { LoginPage } from '../../src/pages/login.page'

type Fixtures = {
    loginWebsite: LoginPage
}

export const test = base.extend<Fixtures> ({
    loginWebsite: async({page}, use) => {
        const loginWebsite = new LoginPage(page)
        await page.goto('/')
        await loginWebsite.login('standard_user','secret_sauce')
        await use(loginWebsite)
    }

})

export {expect} from '@playwright/test'

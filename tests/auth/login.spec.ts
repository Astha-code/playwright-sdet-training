import {test, expect} from '../fixtures/test-fixtures'

test('Login to website', async({page , loginWebsite: _loginWebsite}) => {
        await expect(page).toHaveURL(/inventory/)
})

// test('Login to website', async({page}) => {
//         await page.goto('/')
//         const login = new LoginPage(page)
//         await login.login('standard_user','secret_sauce')
//         await expect(page).toHaveURL(/inventory/)
// })


// test("Login to website", async({page}) => {
//     await page.goto('/')
//     await page.locator('#user-name').fill('standard_user')
//     await page.locator('#password').fill('secret_sauce')
//     await page.locator('#login-button').click()
//     // expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')
//     expect(page).toHaveURL(/inventory/)
//     // console.log(page)
//     // console.log(page.url())
// })


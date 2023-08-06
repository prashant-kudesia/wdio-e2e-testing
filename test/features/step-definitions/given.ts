import { Given } from "@wdio/cucumber-framework"
import chai = require("chai")

Given(/^Login to inventory web app$/, async function () {
    /**
     * Steps:
     * 1. Launching the website
     * 2.login function
     */
    await browser.url("https://www.saucedemo.com")
    // await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    await browser.maximizeWindow()

    try {
        await (await $(`//*[@id="user-name"]`)).setValue("standard_user");
        await (await $(`//*[@id="password"]`)).setValue("secret_sauce");
        await (await $(`//*[@id="login-button"]`)).click();
    } catch (err) {
        console.log(`Error in first login. Retrying...`)

        await browser.pause(2000)
        await browser.refresh()
        await (await $(`//*[@id="user-name"]`)).setValue("standard_user");
        await (await $(`//*[@id="password"]`)).setValue("secret_sauce");
        await (await $(`//*[@id="login-button"]`)).click();


    }

    await browser.back()
    await browser.pause(2000)
    await browser.forward()

    // //Login with another user
    // await browser.pause(2000)
    // await browser.reloadSession()
    // await browser.url("https://www.saucedemo.com")
    // await browser.maximizeWindow()

    // await (await $(`//*[@id="user-name"]`)).setValue("problem_user");
    // await (await $(`//*[@id="password"]`)).setValue("secret_sauce");
    // await (await $(`//*[@id="login-button"]`)).click();

    await browser.debug()

})
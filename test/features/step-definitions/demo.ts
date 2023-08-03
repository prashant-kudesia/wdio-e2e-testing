import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async () => {
    console.log("Before opening browser...");
    await browser.url("https://www.google.com/");
    await browser.pause(1000);
    console.log("After opening browser...");
});

When(/^Search with (.*)$/, async function (SearchItem) {
    console.log(`>> searchItem: $(SearchItem)`);
    let ele = await $('[type=search]')
    await ele.setValue(SearchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search item$/, async function () {
    let ele = await $(`<h3>`)
    ele.click()

})

Then(/^URL should match (.*)$/, async function (ExpectedURL) {
    console.log(`>> ExpectedURL: $(ExpectedURL)`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(ExpectedURL)

})

/**
 * Web Interactions
 */

Given(/^A web page is opened$/, async function () {
    await browser.url("/inputs")
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    await browser.maximizeWindow()

})


When(/^Perfon web interactions$/, async function () {
    /** 
        1. Input box
        * Actions: 
        1. Type into input box
        2. Clear the field and type or just add value
        3. Click and type 
        4. Slow typing
    */

        let num=12345
        let StrNum=num.toString()
    let ele = await $('//*[@id="content"]/div/div/div/input')
    ele.click()
    // await ele.setValue("12345")

    for(let i=0;i<StrNum.length;i++)
    {
        let CharStr=StrNum.charAt(i);
        await browser.pause();
        await browser.keys(CharStr);
    }

    await browser.debug()
    // browser.pause(3000)
})

export { };
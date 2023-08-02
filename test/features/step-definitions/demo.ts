import { Given, Then, When} from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/,async ()=>{
    console.log("Before opening browser...");
    await browser.url("https://www.google.com/");
    await browser.pause(1000);
    console.log("After opening browser...");
});

When(/^Search with (.*)$/,async function (SearchItem) {
    console.log(`>> searchItem: $(SearchItem)`); 
    let ele= await $('[type=search]') 
    await ele.setValue(SearchItem) 
    await browser.keys("Enter")
})

Then(/^Click on the first search item$/,async function() {
    let ele=await $(`<h3>`)
    ele.click()
    
})

Then(/^URL should match (.*)$/,async function ( ExpectedURL) {
    console.log(`>> ExpectedURL: $(ExpectedURL)`);
    let url=await browser.getUrl();
    chai.expect(url).to.equal(ExpectedURL)
    
})

export {};
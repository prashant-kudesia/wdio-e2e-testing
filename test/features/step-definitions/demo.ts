import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";
import { Key } from 'webdriverio';

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
    await browser.waitUntil(async function(){
        return await browser.getTitle()==="WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    },{timeout:20000,interval:500,timeoutMsg:`Failed loading WDIO web page: ${await browser.getTitle()}`})
    let url = await browser.getUrl();
    chai.expect(url).to.equal(ExpectedURL)

})

/**
 * Web Interactions
 */

Given(/^A web page is opened$/, async function () {
    await browser.url("https://www.amazon.in/")
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

    // let num = 12345
    // let StrNum = num.toString()
    // let ele = await $('//*[@id="content"]/div/div/div/input')
    // ele.click()
    // // await ele.setValue("12345")

    // for (let i = 0; i < StrNum.length; i++) {
    //     let CharStr = StrNum.charAt(i);
    //     await browser.pause();
    //     await browser.keys(CharStr);
    // }

    // await browser.debug()

    /**
     * 2.Dropdown
     * Actions:-
     * 1.Asserts default options is selected
     * 2.Select by attribute,text,index
     * 3.get a list of options
     */

    // let ele=await $('//select/option[@selected="selected"]')
    // let val=await ele.getText();
    // chai.expect(val).to.equal("Please select an option")
    // await browser.debug()


    //select a specific option

    // let ddele=await $('#dropdown')
    // // await ddele.selectByVisibleText("Option 2")
    // // await ddele.selectByAttribute("value","1");
    // await ddele.selectByIndex(2);
    // await browser.debug();




    /**3. Get a list of options */

    // let eleArr = await $$('select> option')
    // let arr = []
    // for (let i = 0; i < eleArr.length; i++) {
    //     let ele = eleArr[i]
    //     let val = await ele.getText()
    //     arr.push(val)
    //     console.log(val);
    // }
    // console.log(`>> Options Array: ${arr}`);
    // await browser.debug()




    /**
     * 3.Checkbox
     * Actions:-
     * 1.Select an option
     * 2. Unselect an option (if selected)
     * 3. Assert if option is selected
     * 4. Select all options
     */
    // let eleArr = await $$(`//form[@id="checkboxes"]/input`)
    // for (let i = 0; i < eleArr.length; i++) {
    //     let ele = eleArr[i]
    //     if (!await ele.isSelected())
    //         ele.click()
    // }
    // await browser.debug()





    // 4. Windows handling

    // Steps:
    // 1. Launch the browser
    // 2. Open another windows
    // 3. Switch to the window based on title
    // 4. Switch back to the main window

    // Methods used:
    // 1. getTitle()
    // 2. getWindowHandle()
    // 3. getWindowHandles()
    // 4. switchToWindow()



    // Open new windows

    // await $(`//*[@id="content"]/div/a`).click()
    // await $(`//*[@id="page-footer"]/div/div/a`).click()
    // let currentWinTitle = await browser.getTitle()
    // let parentWinHandle=await browser.getWindowHandle()
    // console.log(`>> currentWinTitle: ${currentWinTitle}`);



    // // Switch to specific window
    // let winHandles = await browser.getWindowHandles()
    // for (let i = 0; i < winHandles.length; i++) {
    //     console.log(`>> Win handle: ${winHandles[i]}`);
    //     await browser.switchToWindow(winHandles[i])
    //     currentWinTitle = await browser.getTitle()
    //     if (currentWinTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro") {
    //         await browser.switchToWindow(winHandles[i])
    //         let headerTxtEleSel = await $('<h1>').getText()
    //         console.log(`>>> headerTxtEleSel: ${headerTxtEleSel}`);
    //         //Rest of the actions go here...
    //         break
    //     }
    // }

    // // switch back to parent window

    // await browser.switchToWindow(parentWinHandle)
    // let parentWinHeaderTxt=await (await $(`<h3>`)).getText
    // console.log(`>>ParentWinHeaderTxt :${parentWinHeaderTxt}`);
    // // continue
    // await browser.debug();



    /**
     * 4. Handling Alerts
     * Methods Used:-
     * 1.isAlertOpen()
     * 2.acceptAlert()
     * 3.dismissAlert()
     * 4.getAlertText()
     * 5.sendAlertText()
     */


    // await (await $(`//*[@id="content"]/div/ul/li[1]/button`)).click();
    // if (await browser.isAlertOpen()) {
    //     await browser.acceptAlert();
    //     await browser.pause(2000)
    // }

    // await (await $(`//*[@id="content"]/div/ul/li[2]/button`)).click()
    // if (await browser.isAlertOpen()) {
    //     await browser.dismissAlert();
    //     await browser.pause(2000);
    // }


    // await (await $(`//*[@id="content"]/div/ul/li[3]/button`)).click()
    // if (await browser.isAlertOpen()) {
    //     let alertText = await browser.getAlertText();
    //     console.log(`>> alertText:${alertText}`);
    //     await browser.sendAlertText("Hello");
    //     await browser.acceptAlert();
    //     await browser.pause(2000);
    // }

    // await $(`//*[@id="file-upload"]`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`);
    // await (await $(`//*[@id="file-submit"]`)).click();
    // await browser.debug();





    // 6. Frames
    // Methods used:
    // 1. switchToFrame
    // 2. switchToParent Frame

    // await $('//*[@id="content"]/div/ul/li[2]/a').click()
    // let ele = await $(`//*[@id="mce_0_ifr"]`)
    // await browser.switchToFrame(ele)
    // // Interaction with frames...
    // await (await $(`//*[@id="tinymce"]/p`)).click()
    // await browser.keys([Key.Ctrl,"A"])
    // await browser.pause(2000)
    // await browser.keys("Delete")
    // await (await $(`//*[@id="tinymce"]/p`)).addValue("Typing into a frame...")
    // await browser.switchToParentFrame()
    // await browser.debug()




    /**
     * 7. Basic Scrolling
     * Methods:(Element Methods)
     * 1. scrollIntoView
     * 
     */


    // await (await $(`//*[@id="navFooter"]/div[3]/span[1]/div/a/div`)).scrollIntoView();
    // await browser.debug();








    /**
    Web table:
        * What are going to cover:
        1. Check number of rows and columns
        2. Get whole table data
        3. Get single row [based on a condition]
        4. Get single column
        5. Get single cell value [based on another cell]
    */


    /**1. Check number of rows and columns */

    // let rowCount = await $$(`//*[@id="table1"]/tbody/tr`).length
    // chai.expect(rowCount).to.equal(4)
    // console.log(`>> Number of rows:${rowCount}`)
    // let colCount = await $$(`//*[@id="table1"]/thead/tr/th`).length
    // chai.expect(colCount).to.equal(6)
    // console.log(`>> Number of columns:${colCount}`)


    /**
     * 2. Get whole table data
     */

    // for (let i = 0; i < rowCount; i++) {
    //     for (let j = 0; j < colCount; j++) {
    //         let cellValue = await (await $(`//*[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`)).getText();
    //         console.log(`>>>>Cell value:${cellValue}`)
    //     }
    // }

    // Structured way of Representing

    // let arr = []
    // for (let i = 0; i < rowCount; i++) {
    //     let personObj = await {
    //         lastname: "",
    //         firstname: "",
    //         email: "",
    //         due: "",
    //         web: ""
    //     }
    //     for (let j = 0; j < colCount; j++) {
    //         let cellValue = await (await $(`//*[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`)).getText();
    //         if (j === 0) personObj.lastname = await cellValue
    //         if (j === 1) personObj.firstname = await cellValue
    //         if (j === 2) personObj.email = await cellValue
    //         if (j === 3) personObj.due = await cellValue
    //         if (j === 4) personObj.web = await cellValue
    //         console.log(`>>>>Cell value:${cellValue}`)
    //     }
    //     arr.push(personObj);
    // }

    // console.log(`>> Whole Table:${JSON.stringify(arr)}`)



    /**
     * Get single row [based on a condition]
     */



    // let arr = []
    // for (let i = 0; i < rowCount; i++) {
    //     let personObj = await {
    //         lastname: "",
    //         firstname: "",
    //         email: "",
    //         due: "",
    //         web: ""
    //     }
    //     for (let j = 0; j < colCount; j++) {
    //         let cellValue = await (await $(`//*[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`)).getText();
    //         let firstname = await (await $(`//*[@id="table1"]/tbody/tr[${i + 1}]/td[2]`)).getText()
    //         if (firstname === "Jason") {
    //             if (j === 0) personObj.lastname = await cellValue
    //             if (j === 1) personObj.firstname = await cellValue
    //             if (j === 2) personObj.email = await cellValue
    //             if (j === 3) personObj.due = await cellValue
    //             if (j === 4) personObj.web = await cellValue
    //         }
    //         // console.log(`>>>>Cell value:${cellValue}`)
    //     }
    //     if (personObj.firstname) {
    //         arr.push(personObj);
    //     }
    // }

    // console.log(`>> Whole Table:${JSON.stringify(arr)}`)


    /**
     * 4. Get single column
     */


    // let arr=[]
    // for(let i=0;i<rowCount;i++)
    // {
    //     let cellValue=await (await $(`//*[@id="table1"]/tbody/tr[${i+1}]/td[4]`)).getText()
    //     arr.push(cellValue)

    // }
    // console.log(`>>>> Single Column: ${arr}`);


    /**
     * 5. Get single cell value [based on another cell]
     */


    // let arr = []
    // for (let i = 0; i < rowCount; i++) {
    //     // let cellValue = await (await $(`//*[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`)).getText()
    //     let price = await (await $(`//*[@id="table1"]//tbody/tr[${i + 1}]/td[4]`)).getText()
    //     let firstname = await (await $(`//*[@id="table1"]//tbody/tr[${i + 1}]/td[2]`)).getText()
    //     if (+(price.replace("$", "")) > 50) {
    //         arr.push(firstname)
    //     }
    // }
    // console.log(`>>>> Single Column value: ${arr}`);


    /**
     * Scrolling
     * 
     * Visible Portion
     * Windows Object
     * 1. scrollBy
     * Y->[-]window.innerHeight
     */

    //Scroll Down

    await browser.execute(() => {
        window.scrollBy(0, window.innerHeight)
    })
    await browser.pause(2000)

    //Scroll up
    await browser.execute(() => {
        window.scrollBy(0, -window.innerHeight)
    })
    /** 
     * 
     * 
     * Invisible Portion
     * window object
     * scrollTo
     * Y-> document.body.scrollTop[scrollHeight]
     * 
     */


    await browser.pause(2000)
    await browser.execute(() => {
        window.scrollBy(0, document.body.scrollHeight)
    })

    await browser.pause(2000)
    await browser.execute(() => {
        window.scrollBy(0, document.body.scrollTop)
    })


    await browser.debug()
})

export { };
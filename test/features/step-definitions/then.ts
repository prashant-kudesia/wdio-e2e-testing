import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

/**
 * Asserts the item number present in the page
 */
Then(/^Inventory page should list (.*)$/, async function (NumberOfProducts) {
    if (!NumberOfProducts) throw Error(`Invalid number provided: ${NumberOfProducts}`)
    let eleArr = await $$(`.inventory_item_name`)
    chai.expect(eleArr.length).to.equal(parseInt(NumberOfProducts))

})



/**
 * Steps:
 * 1.Get the price list
 * 2.convert string into number
 * 3.Asserts if any value is <=0
 */
Then(/^Validate all products have valid price$/, async function () {
    let eleArr = await $$(`.inventory_item_price`)
    let priceStrArr = [];
    for (let i = 0; i < eleArr.length; i++) {
        let priceStr = await eleArr[i].getText();
        priceStrArr.push(priceStr);
    }
    console.log(`>>Price with $:${priceStrArr}`)


    /**
     * 2.convert string into number
     */
    let priceNumArray = await priceStrArr.map(ele => +(ele.replace("$", "")))

    console.log(`>> Price in numbers:${priceNumArray}`);

    /**
     * 3.Asserts if any value is <=0
     */
    let invalidPriceArray = await priceNumArray.filter(ele => ele <= 0)
    chai.expect(invalidPriceArray.length).to.equal(0)





})
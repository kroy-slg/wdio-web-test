import { Given, When, Then } from '@wdio/cucumber-framework'
import homePage from "../pages/homePage";
import {searchPage} from "../pages/searchPage";

Given(/^User is on flipkart home page$/, async () => {
    await homePage.open('/');
    await homePage.closePopupIfPresent();
})

When(/^User searches for "(.*)"$/, async (product: string) => {
    await homePage.searchProduct(product);
})

Then(/^Search results should be displayed$/, async () => {
    await searchPage.waitForElement(searchPage.productTitles[0]);
    await expect(await searchPage.productTitles.length).toBeGreaterThan(0);
})

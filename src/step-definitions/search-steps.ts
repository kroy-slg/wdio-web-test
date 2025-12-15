import { Given, When, Then } from '@wdio/cucumber-framework'
import homePage from "../pages/homePage";
import {searchPage} from "../pages/searchPage";

Given('user is on Flipkart home page', async () => {
    await browser.url('/')
    await homePage.closePopupIfPresent()
})

When('user searches for {string}', async (product: string) => {
    await homePage.searchProduct(product)
})

Then('search results should be displayed', async () => {
    await searchPage.verifyResultsDisplayed()
    await expect(await searchPage.productTitles.length).toBeGreaterThan(0);
})

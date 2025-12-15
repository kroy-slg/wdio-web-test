import { Given, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'

Given('user opens Flipkart website', async () => {
    await browser.url('/')
})

Then('user should see Flipkart title', async () => {
    await expect(browser).toHaveTitle('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com')
})

import { Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'

Then(/^User should see flipkart title$/, async () => {
    await expect(browser).toHaveTitle('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com')
})

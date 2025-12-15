export default class basePage {

    async open(path: string) {
        await browser.url(path)
    }

    async waitForElement(el: WebdriverIO.Element) {
        await el.waitForDisplayed()
    }
}

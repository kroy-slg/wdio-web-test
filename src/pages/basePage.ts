import {browser} from "@wdio/globals";

export default class basePage {

    async open(path: string = '/') {
        await browser.url(path)
    }

    async waitForElement(el: ChainablePromiseElement) {
        await el.waitForDisplayed()
    }

    async waitForPageLoad() {
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState === 'complete')),
        );
    }
}

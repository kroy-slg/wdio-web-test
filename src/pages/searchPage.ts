import basePage from "./basePage";

class SearchPage extends basePage {

    get productTitles() {
        return $$("//div[@class='RG5Slk']")
    }

    async verifyResultsDisplayed() {
        await browser.waitUntil(async () => {
            return (await this.productTitles.length) > 0
        }, { timeout: 10000 })
    }
}

export const searchPage = new SearchPage();

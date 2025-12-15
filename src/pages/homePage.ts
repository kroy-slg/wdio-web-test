import basePage from "./basePage";

class HomePage extends basePage {

    get closeLoginPopup() {
        return $('button._2KpZ6l._2doB4z')
    }

    get searchBox() {
        return $('input[name="q"]')
    }

    get searchButton() {
        return $('button[type="submit"]')
    }

    async closePopupIfPresent() {
        if (await this.closeLoginPopup.isDisplayed()) {
            await this.closeLoginPopup.click()
        }
    }

    async searchProduct(product: string) {
        await this.searchBox.setValue(product)
        await this.searchButton.click()
    }
}

export default new HomePage()

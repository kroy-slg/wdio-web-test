class LoginPage {
    get closeLoginPopup() {
        return $('button._2KpZ6l._2doB4z')
    }

    async closePopup() {
        if (await this.closeLoginPopup.isDisplayed()) {
            await this.closeLoginPopup.click()
        }
    }
}

export default new LoginPage()

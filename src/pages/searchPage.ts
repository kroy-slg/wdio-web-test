import basePage from "./basePage";

class SearchPage extends basePage {

    public get productTitles() {
        return $$("//div[@class='RG5Slk']")
    }
}

export const searchPage = new SearchPage();

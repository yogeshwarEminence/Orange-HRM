export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await this.page.locator(locator).click();
    }

    async type(locator, text) {
        await this.page.locator(locator).fill(text);
    }

    async goTo(url) {
        await this.page.goto(url);
    }

}
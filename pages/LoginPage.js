import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.testData = this.testData;
    }

    async enterUserName(userName) {
        await this.type("input[placeholder='Username']", userName);
    }

    async enterPassword(password) {
        await this.type("input[placeholder='Password']", password);
    }

    async clickLoginButton() {
        await this.click("button[type='submit']")
    }

    
    
}
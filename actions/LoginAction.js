const { LoginPage } = require("../pages/LoginPage");

exports.LoginAction = class LoginAction {
    constructor(page) {
        this.page = page;
        this.login = new LoginPage(this.page);
    }

    async loginUser(userName, password) {
        await this.login.enterUserName(userName);
        await this.login.enterPassword(password);
        await this.login.clickLoginButton();
    }
}
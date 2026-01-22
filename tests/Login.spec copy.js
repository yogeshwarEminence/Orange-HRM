import { test, expect } from "../fixtures/fixtures.js"; // your extended test with LoginData
import { LoginAction } from "../actions/LoginAction.js";

test.describe("Login Tests", () => {

    test.beforeEach(async ({ page, LoginData }) => {
        await page.goto(LoginData.validLogin.URL);
    });

    test("Valid user should login successfully", async ({ page, LoginData }) => {
        const login = new LoginAction(page);
        const user = LoginData.validLogin;

        await login.loginUser(user.userName, user.password);

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    });

    test("Invalid user name should show error", async ({ page, LoginData }) => {

        const login = new LoginAction(page);
        const user = LoginData.invalidUserName;

        await login.loginUser(user.userName, user.password);

        await page.waitForURL(LoginData.validLogin.URL, { timeout: 10000 });

        await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible({ timeout: 10000 });
    });

    test("Invalid password should show error", async ({ page, LoginData }) => {
        const login = new LoginAction(page);
        const user = LoginData.invalidPassword;

        await login.loginUser(user.userName, user.password);

        await page.waitForURL(LoginData.validLogin.URL, { timeout: 10000 });

        await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible({ timeout: 10000 });
    });

    test("Invalid credentials should show error", async ({ page, LoginData }) => {
        const login = new LoginAction(page);

        const user = LoginData.invalidCredentials;

        await login.loginUser(user.userName, user.password);

        await page.waitForURL(LoginData.validLogin.URL, { timeout: 10000 });

        await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible({ timeout: 10000 });

    });


});

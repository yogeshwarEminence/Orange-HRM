import { test as base, expect } from "@playwright/test";
import LoginData from "./testData/Login_Data.json";

export const test = base.extend({
    LoginData: async ({ }, use) => {
        await use(LoginData);
    }
});

export { expect };
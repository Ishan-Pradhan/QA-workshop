const { test, expect } = require("@playwright/test");
const testData = require("../../Fixtures/Login.fixture.json");
const { LoginPage } = require("../../pageObjects/contactTest.login.po");

const { TodayDate } = require("../../utils/helper.spec");
const { DashboardPage } = require("../../pageObjects/contactTest.dashboard.po");

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test.describe("Dashboard crud check", () => {
  test.only("crud", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.username, testData.validUser.password);
    await login.verifyValidLogin();

    await page.locator('//*[@id="add-contact"]').click();

    const dashboard = new DashboardPage(page);
    await dashboard.fillForm();
    await dashboard.validFill();
    await dashboard.editData();
    await dashboard.validEdit();
    await dashboard.deleteData();
    await dashboard.validDelete();
    await dashboard.logout();
    await dashboard.validLogout();

    await page.waitForTimeout(10000);
  });
});

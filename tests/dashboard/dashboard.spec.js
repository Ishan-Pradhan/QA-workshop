test.describe("Dashboard crud check", () => {
  test.only("crud", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.username, testData.validUser.password);

    await login.verifyValidLogin();
    await page.locator('//*[@id="menu-item-20"]/a').click();
    await page.locator();
  });
});

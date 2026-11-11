import { test, page, expect } from "@playwright/test";
import { text } from "node:stream/consumers";

test.describe("UI review", async () => {
  test("Navigate to the page", async ({ page }) => {
    await page.goto("https://www.automationexercise.com/");

    await page.waitForTimeout(2000);

    expect(await page.title()).toBe("Automation Exercise");

    expect(page.url()).toContain("www.automationexercise.com");

    console.log(page.url());

    const cartButton = page.getByText(" Signup / Login");

    await cartButton.click();

    await page.getByText(" Cart").click();

    await page.waitForTimeout(2000);

    //const poloText = await page.locator(".pull-right").textContent();

    //console.log(poloText);
  });
});

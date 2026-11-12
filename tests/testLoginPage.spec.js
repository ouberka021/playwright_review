import { test } from "@playwright/test";
import dotenv from "dotenv";
import { LoginPage, LoginPage2 } from "../pages/LoginPage2.js";

dotenv.config();

test("Successful login", async ({ page }) => {
  await page.goto(process.env.url);

  const login = new LoginPage2(page);

  await page.waitForTimeout(1500);

  await login.loginCredentials(process.env.username1, process.env.password1);

  await page.waitForTimeout(1500);

  console.log(process.env.url);
});

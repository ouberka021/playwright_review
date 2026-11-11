import {test,page} from "@playwright/test";

test.describe('UI review', async() =>{

    test('Navigate to the page', async ({page})=>{

      await page.goto('https://www.automationexercise.com/');
      await page.waitForTimeout(4000);



    })




})
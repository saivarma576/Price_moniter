import { test, expect } from '@playwright/test';
 

  test.describe.serial('Vendor Registration Request', () => {

    test("VRR Submission", async ({ page }) => {  
      
      await page.goto('https://niels.codes');
      // Wait until the element has actually loaded in
      await page.waitForSelector('#title-container');
    
      // Get the title element by its CSS selector
      const nameElement = await page.$('#title-container h1');
      // Extract the inner text from the element
      const name = await nameElement?.innerText();;
      console.log(name);  
});




});
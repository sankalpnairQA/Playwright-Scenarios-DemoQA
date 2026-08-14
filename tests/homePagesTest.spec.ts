import { test, Expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';





test('Verify navigation', async ({page})=>{
  const hp = new HomePage(page);
  

  await hp.navigateToUrl();
  await hp.verifyurl();

});


test('Go to Alerts Frames Windows page',async ({page})=>{
  const hp = new HomePage(page);

   await hp.navigateToUrl();
   await hp.clickOnAlertsFrameWindowsLink();
  

})
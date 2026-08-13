import {expect, test} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { WindowsPage } from '../pages/WindowsPage';



test('Verify click on alerts frames windows page',async({page})=>{

    const hp= new HomePage(page);
    const windowsP= new WindowsPage(page);


    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await windowsP.clickBrowserWindowsLink();
});

test('Verify the new tab opened', async ({page}) => {
    const hp= new HomePage(page);
    const windowsP= new WindowsPage(page);


    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await windowsP.clickBrowserWindowsLink();

    const newPage = await windowsP.clickOnNewTab();
    console.log(newPage.title());
    console.log(newPage.locator('body').allInnerTexts);
   
})

test('Verify the message on the new tab', async({page})=>{

    const hp= new HomePage(page);
    const windowsP= new WindowsPage(page);


    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await windowsP.clickBrowserWindowsLink();

    const newPage = await windowsP.clickOnNewTab();
    
    await windowsP.verifyNewTabMessage(newPage);
})

test('verify new Tab is closed',async({page})=>{

const hp= new HomePage(page);
    const windowsP= new WindowsPage(page);


    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await windowsP.clickBrowserWindowsLink();

    const newPage = await windowsP.clickOnNewTab();
    await windowsP.closeNewtab(newPage);


})

test('verify allfunctionalities of a new window button',async ({page})=>{

    const hp= new HomePage(page);
    const windowsP= new WindowsPage(page);
    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await windowsP.clickBrowserWindowsLink();

    const newPage = await windowsP.VerifyCompleteNewWindowFunctionality();


})

test('Verify allfunctionalities of a new window message button', async ({page})=>{

     const hp= new HomePage(page);
    const windowsP= new WindowsPage(page);
    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await windowsP.clickBrowserWindowsLink();

    const newPage = await windowsP.verifyCompleteNewWindowMessageFunctionality();







})

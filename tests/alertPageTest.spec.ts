import { test,expect } from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { Alertspage } from "../pages/AlertsPage";


test('Verify Alert functionality', async({page})=>{

    const hp = new HomePage(page);
    const alertP = new Alertspage(page);

    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await alertP.clickonAlertsLink();

    await alertP.verifyAlertFunc();

})

test('Verify Alert 5seconds functionality',async({page})=>{

    const hp = new HomePage(page);
    const alertP = new Alertspage(page);

    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await alertP.clickonAlertsLink();

    await alertP.verifyAlert5secFunc();
})

test('verify Alert confirm box functionality', async({page})=>{

     const hp = new HomePage(page);
    const alertP = new Alertspage(page);

    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await alertP.clickonAlertsLink();
    await alertP.verifyAlertCancelFunc();

})

test('Verify Alert prompt box functionality', async({page})=>{
    const hp = new HomePage(page);
    const alertP = new Alertspage(page);

    await hp.navigateToUrl();
    await hp.clickOnAlertsFrameWindowsLink();
    await alertP.clickonAlertsLink();
    await alertP.verifyAlertPromptFunc();


})


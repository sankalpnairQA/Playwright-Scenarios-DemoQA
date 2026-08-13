import {Page, Locator, expect} from '@playwright/test'

export class HomePage{


    readonly page: Page;
    readonly afw_menu : Locator;


constructor(page:Page){

    this.page = page;
    this.afw_menu = page.getByRole('link',{name:'Alerts, Frame & Windows'});
    
};

    async navigateToUrl(){

        await this.page.goto('/');
        console.log(`Navigated to the site`);

};
    async verifyurl(){

        await expect(this.page).toHaveURL('https://demoqa.com/')
        console.log(`Verified url`);

};

    async clickOnAlertsFrameWindowsLink(){
        await this.afw_menu.click();
        await expect(this.page).toHaveURL('https://demoqa.com/alertsWindows');

    }




};
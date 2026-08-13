import {Page, Locator, expect} from '@playwright/test'
import {windowsPageTestdata } from '../testData/WindowsPageTestdata';


export class WindowsPage{

    readonly page:Page;
    readonly browserWindowsLink : Locator;
    readonly browserWindowsTitle: Locator;
    readonly newTabButton: Locator;
    readonly newWindowButton: Locator;
    readonly newWindowMessageButton: Locator;
    

constructor (page: Page){

    this.page  = page;
    this.browserWindowsLink = page.getByRole('link',{name:'Browser Windows'});
    this.browserWindowsTitle = page.getByRole('heading',{name:'Browser Windows'});
    this.newTabButton=page.getByRole('button',{name:'New Tab'});
    this.newWindowButton = page.getByRole('button',{name:'New Window',exact: true});
    this.newWindowMessageButton = page.getByRole('button',{name:'New Window Message'});
}

    async clickBrowserWindowsLink(){

        await this.browserWindowsLink.click();
        await expect(this.browserWindowsTitle).toHaveText('Browser Windows');

    }

   async clickOnNewTab(){

    const newTabPromise  = this.page.context().waitForEvent('page');
    await this.newTabButton.click();
    const newPage =  await newTabPromise;
    await newPage.waitForLoadState();
    return newPage;


   };

   async verifyNewTabMessage(newPage:Page){

    const message = newPage.getByText('This is a sample page');

    await expect(message).toHaveText(windowsPageTestdata.message);


   }

   async closeNewtab(newPage:Page){

    await newPage.close();

   }

   async VerifyCompleteNewWindowFunctionality(){

    const [newPage] = await Promise.all(
        [this.page.context().waitForEvent('page'),this.newWindowButton.click()]);

        await newPage.waitForLoadState();

        const windowText = await newPage.getByText('This is a sample page');
        await expect(windowText).toHaveText(windowsPageTestdata.message);
        
        await newPage.close();
 };


    async verifyCompleteNewWindowMessageFunctionality(){

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),this.newWindowMessageButton.click()
        ]);

        await newPage.waitForLoadState();

        const windowMessagetext = await newPage.getByText(/Knowledge increases/);
        await expect(windowMessagetext).toHaveText(windowsPageTestdata.windowmessage);
        await newPage.close();


    }




}
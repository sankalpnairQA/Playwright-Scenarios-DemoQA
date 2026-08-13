import {Page,Locator, expect} from '@playwright/test'
import { alertTestdata } from '../testData/AlertPageTestdata';


export class Alertspage{

    readonly page: Page;
    readonly AlertsLink: Locator;
    readonly AlertsTitle: Locator;
    readonly AlertButton : Locator;
    readonly AlertButton5sec: Locator;
    readonly AlertBUttonCBox: Locator;
    readonly AlertButtonCBoxText: Locator;
    readonly alertButtonPBox: Locator;
    readonly alertButtonPBoxText: Locator;


constructor(page:Page){

   this.page = page;
   this.AlertsLink= page.getByRole('link',{name:'Alerts',exact:true});
   this.AlertsTitle = page.getByRole('heading',{name:'Alerts'});
   this.AlertButton = page.locator('#alertButton');
   this.AlertButton5sec = page.locator('#timerAlertButton');
   this.AlertBUttonCBox = page.locator('#confirmButton');
   this.AlertButtonCBoxText= page.locator('.text-success');
   this.alertButtonPBox = page.locator('#promtButton');
   this.alertButtonPBoxText = page.locator('#promptResult');
}
    async clickonAlertsLink(){
        await this.AlertsLink.click();
        await expect(this.AlertsTitle).toHaveText(alertTestdata.title);

    }

    async verifyAlertFunc() {

    this.page.once('dialog',async(dialog)=>{

        await dialog.accept();

    })

    await this.AlertButton.click();
    console.log('Alert accepted');
}


    async verifyAlert5secFunc(){
        this.page.once('dialog',async(dialog)=>{
         await dialog.accept();
        })

    await this.AlertButton5sec.click();
    console.log(`Alert 5 seconds interacted`);

    }

    async verifyAlertCancelFunc(){

        this.page.once('dialog',async(dialog)=>{

            await dialog.dismiss();
        })
        await this.AlertBUttonCBox.click();
        console.log('perform Alert confirm box');
        await expect(this.AlertButtonCBoxText).toHaveText(alertTestdata.confirmBoxText);



    }

    async verifyAlertPromptFunc(){
        this.page.once('dialog',async(dialog)=>{

            await dialog.accept('PlaknasQA');

        });

        await this.alertButtonPBox.click();
        await expect(this.alertButtonPBoxText).toHaveText(alertTestdata.promptBoxtext);
        console.log('Prompt box interacted');

    }

}
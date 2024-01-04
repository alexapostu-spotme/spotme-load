import { pages } from "../support/pages";
import { speaker_url, moderator_url } from "../support/data";



const randomNumber = Math.floor(Math.random() * 100) + 1;


const randomName = `Alex${randomNumber}`;

export class SpeakerTest {
    async openSpeakerPage(){
        await browser.url(speaker_url)
    }

    async acceptCameraPlusMikePrompt(){

    }

    async enterStudio(){
        await pages.speakerPage.getNameField().setValue(randomName)
        
        await pages.speakerPage.getTestConnectivityButton().click()
        await browser.pause(35000)

        if(await pages.speakerPage.getEnterStreamAnyway().isDisplayed() === true){
            await pages.speakerPage.getEnterStreamAnyway().click()
        }else{
            await pages.speakerPage.getEnterStudioButton().click()
        }
        await browser.pause(120000) //wait in the stream for 120 seconds
        
    }
    
}

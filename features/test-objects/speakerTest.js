import { pages } from "../support/pages";
import { Links } from "../support/data";

const speaker_url = 'https://eu.backstage.spotme-stage.com/live-session/d8046a47a2d69c2dd18fe94c025da31d/18970171-8800-496f-b76c-1b71d92bc527?accredited_link_token=eb802dac-04a0-4860-a8ed-557e0672412a'
const moderator_url = 'URL'


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

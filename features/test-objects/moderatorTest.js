import { pages } from "../support/pages";
import { speaker_url, moderator_url } from "../support/data";

const randomNumber = Math.floor(Math.random() * 100) + 1;
const path = require('path');
const randomName = `Moderator${randomNumber}`;

export class ModeratorTest {
    async openModeratorPage(){
        await browser.url(moderator_url)
    }

    async acceptCameraPlusMikePrompt(){

    }

    async enterStudio(){
        await pages.speakerPage.getNameField().setValue(randomName)
        
        await pages.speakerPage.getTestConnectivityButton().click()
        //await browser.pause(35000)
        await pages.moderatorPage.getResultsHeader().waitForExist()

        if(await pages.speakerPage.getEnterStreamAnyway().isDisplayed() === true){
            await pages.speakerPage.getEnterStreamAnyway().click()
        }else{
            await pages.speakerPage.getEnterStudioButton().click()
        }
        //await browser.pause(5000) //wait in the stream for X seconds
        
    }

    async addVideo(){
        await pages.moderatorPage.getVideosButton().click()
        await browser.pause(3000)

        if(await pages.moderatorPage.getAddVideoButton2().isDisplayed() === true){
            await pages.moderatorPage.getAddVideoButton2().click()
        }else{
            await pages.moderatorPage.getAddVideoButton().click()
        }
        await browser.pause(3000)
        await pages.moderatorPage.getUploadButton().click()

        const filePath = path.join(__dirname, '../files/video1.mp4');
        browser.uploadFile(filePath).then((remoteFilePath) => {
            $('[type="file"]').setValue(remoteFilePath);
        });
        //await browser.pause(120000)
        await browser.pause(3000)
        await pages.moderatorPage.getVideoThumbnail().waitForExist()
        await browser.pause(3000)
        await pages.moderatorPage.getPlayNowButton().waitForExist()
        await browser.pause(3000)
        await pages.moderatorPage.getPlayNowButton().click()
        await browser.pause(3000)
        await pages.moderatorPage.getPlayVideoButton().click()

        await pages.moderatorPage.getRemoveVideoButton().waitForExist()
        await pages.moderatorPage.getRemoveVideoButton().waitForExist({reverse:true})

        //await expect(pages.moderatorPage.getVideoTitle()).toHaveText('video1')
    }
    
}

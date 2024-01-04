import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from '../support/tests';
Given("The speaker opens the speaker link", async () => {
    await tests.speakerTest.openSpeakerPage()
});

When("The speaker opens the camera", async () => {
    await tests.speakerTest.acceptCameraPlusMikePrompt()
});

Then("I should see all 10 speakers camera feed", async () => {
    await tests.speakerTest.enterStudio()
});

Given("Moderator adds video", async () =>{
    await tests.moderatorTest.openModeratorPage()
    await tests.moderatorTest.enterStudio()
    await tests.moderatorTest.addVideo()
})


export class Links{

    speaker_url = 'https://eu.backstage.spotme-stage.com/live-session/d8046a47a2d69c2dd18fe94c025da31d/18970171-8800-496f-b76c-1b71d92bc527?accredited_link_token=eb802dac-04a0-4860-a8ed-557e0672412a'
    moderator_url = 'URL'

    provideSpeakerLink(){
        return (this.speaker_url)
    }
    provideModeratorLink(){
        return (this.moderator_url)
    }
}
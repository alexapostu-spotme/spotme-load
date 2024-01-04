import { SpeakerPage } from "../page-objects/speakerPage";


class Pages {
    constructor() {
        this.speakerPage = new SpeakerPage();
       
    }
}

export const pages = new Pages();
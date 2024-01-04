import { ModeratorPage } from "../page-objects/moderatorPage";
import { SpeakerPage } from "../page-objects/speakerPage";


class Pages {
    constructor() {
        this.speakerPage = new SpeakerPage();
        this.moderatorPage = new ModeratorPage();
    }
}

export const pages = new Pages();
import { ModeratorTest } from "../test-objects/moderatorTest";
import { SpeakerTest } from "../test-objects/speakerTest";


class Tests {
    constructor() {
        this.speakerTest = new SpeakerTest();
        this.moderatorTest = new ModeratorTest();
       
    }
}

export const tests = new Tests();
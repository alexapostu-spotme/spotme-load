export class ModeratorPage {
    
    getNameField(){
        return $('[name="name"]')
    }

    getTestConnectivityButton(){
        return $('.buttons .btn.btn-primary')
    }

    getEnterStudioButton(){
        return $('.buttons .btn.btn-green.enter-studio')
    }

    getEnterStreamAnyway(){
        return $(".buttons .btn.btn-default.enter-studio")
    }
    getAddVideoButton(){
        return $('.no-videos .btn.btn-primary')
    }
    getAddVideoButton2(){
        return $('.action .btn.btn-primary')
    }
    getUploadButton(){
        return $('.modal-body .btn.library-upload.btn-primary')
    }
    getVideosButton(){
        return $('.button-toolbar .ic-video-player')
    }
    getResultsHeader(){
        return $('.results-header')
    }
    getVideoTitle(){
        return $('.title-text')
    }
    getVideoProcessing(){
        return $('.thumbnail-processing-overlay')
    }
    getVideoThumbnail(){
        return $('.video-thumbnail')
    }

    getPlayNowButton(){
        return $('//span[text()="Play now"]')
    }
    getPlayVideoButton(){
        return $('.modal-footer .btn.btn-primary')
    }
    getRemoveVideoButton(){
        return $('.action-buttons')
    }
}

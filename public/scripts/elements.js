export default {
    get() {
        this.playerElement = document.querySelector(`#${playerId}`),
        this.controls = this.playerElement.querySelector('.controls'),
        this.progressBar = this.playerElement.querySelector('.progress-bar'),
        this.playBtn = this.controls.querySelector('.play-pause'),
        this.forwardBtn = this.controls.querySelector('.forward'),
        this.backwardBtn = this.controls.querySelector('.backward'),
        this.audioElement = this.playerElement.querySelector('audio'),
        this.imgPlayPause = this.playBtn.querySelector('img'),
        this.ballProgressBar = document.querySelector('.ball-progress-bar'),
        this.timeStamp = document.querySelector('.time-stamp'),
        this.progressBarWrapper = document.querySelector('.progress-bar-wrapper')
    }
};
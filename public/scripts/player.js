class Player {
    constructor({ playerId }){
      this.playerElement = document.querySelector(`#${playerId}`);
      this.controls = this.playerElement.querySelector('.controls');
      this.progressBar = this.playerElement.querySelector('.progress-bar');
      this.playBtn = this.controls.querySelector('.play-pause');
    //   this.pauseBtn = this.controls.querySelector('.pause');
      this.forwardBtn = this.controls.querySelector('.forward');
      this.backwardBtn = this.controls.querySelector('.backward');
      this.audioElement = this.playerElement.querySelector('audio');
      this.imgPlayPause = this.playBtn.querySelector('img');
  
      this.handleEventListeners();
    }
    handleEventListeners(){
      this.playBtn.addEventListener('click', () => {
        if (this.audioElement.paused){
            this.audioElement.play();
            this.imgPlayPause.src = "../public/assets/stop.svg"
        }
        else {
            this.audioElement.pause();
            this.imgPlayPause.src = "../public/assets/play.svg"
        }
      });
      
    //   this.pauseBtn.addEventListener('click', () => {
    //     this.audioElement.pause();
    //   });
  
      this.forwardBtn.addEventListener('click', () => {
        this.audioElement.currentTime += 10;
      });
  
      this.backwardBtn.addEventListener('click', () => {
        this.audioElement.currentTime -= 10;
      });
  
      this.audioElement.addEventListener('timeupdate', () => {
        const {
          currentTime,
          duration,
        } = this.audioElement;
        this.progressBar.style.width = `${100 * currentTime / duration}%`;
      });
    }
  }
  
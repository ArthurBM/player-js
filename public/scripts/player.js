//import musicNames from "./mp3data.js";
import elements from "./elements.js";
import musics from "./data.js"

export default class Player {
    constructor({ playerId }){
      // elements.get.call(this);
      this.playerElement = document.querySelector(`#${playerId}`);
      this.controls = this.playerElement.querySelector('.controls');
      //this.progressBar = this.playerElement.querySelector('.progress-bar');
      this.playBtn = this.controls.querySelector('.play-pause');
      this.forwardBtn = this.controls.querySelector('.forward');
      this.backwardBtn = this.controls.querySelector('.backward');
      this.audioElement = this.playerElement.querySelector('audio');
      this.imgPlayPause = this.playBtn.querySelector('img');
      //this.ballProgressBar = document.querySelector('.ball-progress-bar');
      this.timeStampCurrent = document.querySelector('.time-stamp#current');
      this.timeStampTotal = document.querySelector('.time-stamp#total');
      //this.progressBarWrapper = document.querySelector('.progress-bar-wrapper');
      this.seekBar  = document.querySelector('#seekbar');
      this.musicTitle = document.querySelector('.music-title');
      this.musicAuthor = document.querySelector('.music-author');
      

      this.isPlaying = false;

      this.indexMusic = 0;
      this.initialize();
      this.handleEventListeners();
      
    }
    smartTime(time) {
      return time < 10 ? "0" + time.toString().trim() : time;
    }

    setSeek(value) {
      this.audioElement.currentTime = value;
    }

    //actions() {
    //  this.seekBar.oninput() = () => this.setSeek(this.seekBar.value);
    //  this.seekBar.onchange() = () => this.setSeek(this.seekBar.value);
    //  this.seekBar.max = this.audioElement.duration 
    //}

    initialize() {
      this.updateMusicTitleAuhthor();
      this.seekBar.max = this.audioElement.duration;
    }

    updateMusicTitleAuhthor() {
      this.musicTitle.innerText = musics[this.indexMusic].title;
      this.musicAuthor.innerText = musics[this.indexMusic].author;
    }

    handleEventListeners(){

      this.playBtn.addEventListener('click', () => {
        if (this.audioElement.paused){
            this.audioElement.play();
            this.imgPlayPause.src = "../public/assets/stop.svg"
            this.isPlaying = true;
        }
        else {
            this.audioElement.pause();
            this.imgPlayPause.src = "../public/assets/play.svg",
            this.isPlaying = false;
        }
      });
  
      this.forwardBtn.addEventListener('click', () => {
        if (this.indexMusic < musics.length - 1) {
          this.audioElement.src = musics[this.indexMusic + 1].file;
          this.indexMusic++;
          this.audioElement.play();
          this.seekBar.max = this.audioElement.duration;
          this.updateMusicTitleAuhthor();
        }
      });
  
      this.backwardBtn.addEventListener('click', () => {
        if (this.indexMusic !== 0) {
          this.audioElement.src = musics[this.indexMusic - 1].file;
          this.indexMusic--;
          this.audioElement.play();
          this.updateMusicTitleAuhthor();
        }
        this.seekBar.max = this.audioElement.duration;
      });
  
      this.audioElement.addEventListener('timeupdate', () => {
         const {
           currentTime,
           duration
         } = this.audioElement;
         let currentSeconds, currentMinutes, totalMinutes, totalSeconds;
         this.seekBar.value = currentTime;
         
         currentMinutes = this.smartTime(Math.floor(currentTime / 60)) ;
         currentSeconds = this.smartTime(Math.floor(currentTime % 60));
         totalMinutes = this.smartTime(Math.floor(duration / 60));
         totalSeconds = this.smartTime(Math.floor(duration % 60));

         this.timeStampCurrent.innerText = currentMinutes + ":" + currentSeconds;
         this.timeStampTotal.innerText = totalMinutes + ":" + totalSeconds;
         
      });

      this.seekBar.addEventListener('input', () => {
        // this.setSeek(this.seekBar.value);
        this.audioElement.currentTime = this.seekBar.value;
      })

    }
  }
  
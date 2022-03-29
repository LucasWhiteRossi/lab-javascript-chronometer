class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.milliseconds++;
      this.currentTime = Math.floor(this.milliseconds/100)
      if (callback) {
        callback();
      }
    }, 10);
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  
  getSeconds() {
    return Math.floor(this.currentTime%60);
  }
  
  getMilliseconds() {
    return this.milliseconds%100;
  }

  computeTwoDigitNumber(value) {
    if (`${value}`.length<2){
      return `0${value}`
    }
    return `${value}`;
  }
  
  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMilliSec);
  }
  
  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }
  
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(
      this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

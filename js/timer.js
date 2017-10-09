const Timer = function (time, callback) {

  this.counter = time;

  this.tick = () => {
    if (this.counter === 0) {
      return false;
    }
    return this.counter--;
  };

  this.timerRun = setInterval(() => {
    this.tick();
    if (this.counter === 0) {
      this.stop();
      if (typeof (callback) === `function`) {
        callback();
      }
    }
  }, 1000);

  this.stop = () => {
    this.counter = 0;
    clearInterval(this.timerRun);
  };
};

export default Timer;

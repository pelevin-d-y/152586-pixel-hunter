const Timer = function (time) {
  this.tick = () => {
    time = time - 1;
    this.counter = time;
    return time;
  };

  this.counter = time;

  this.timerRun = setInterval(() => {
    this.tick();
    console.log(this.counter);
    this.stop();
  }, 1000);

  this.stop = () => {
    if (this.counter === 25) {
      console.log(`timer finish`);
      clearInterval(this.timerRun);
    }
  };
};

export default Timer;

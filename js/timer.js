const timer = (time) => {
  return {
    tick: () => {
      time = time - 1;
    },
    counter: time
  };


  // if (time !== 30) {
  //   return -1;
  // }
  // console.log(time);
  // const tick = () => {
  //   time = time - 1;
  //   return time;
  // };

  // const timerTick = setInterval(() => {
  //   tick();
  //   console.log(time)
  //   if (time === 0) {
  //     clearInterval(timerTick);
  //     console.log(`finish`);
  //   }
  // }, 1000);
  // return timerTick;
};

export default timer;

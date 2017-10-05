const timer = (time) => {
  if (time !== 30) {
    return -1;
  }

  const tick = () => {
    time = time - 1;
    return time;
  };

  const timerTick = setInterval(() => {
    tick();
    if (time === 0) {
      clearInterval(timerTick);
    }
  }, 1000);
  return timerTick;
};

export default timer;

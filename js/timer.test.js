import assert from 'assert';
import Timer from './timer.js';

describe(`timer`, () => {
  it(`if timer !== 30`, () => {
    let currentTimer = new Timer(30);
    assert.equal(currentTimer.counter, 30);
  });

  it(`2 тика`, () => {
    let currentTimer = new Timer(30);
    currentTimer.tick();
    currentTimer.tick();
    assert.equal(currentTimer.counter, 28);
  });

  it(`стоп`, () => {
    let currentTimer = new Timer(30);
    currentTimer.tick();
    currentTimer.stop();
    const currentTick = currentTimer.tick();
    assert.equal(currentTick, false);
    assert.equal(currentTimer.counter, 0);
  });

  it(`интервал`, (done) => {
    let currentTimer = new Timer(1, () => {
      assert.equal(currentTimer.counter, 0);
      done();
      clearTimeout(timeoutId);
    });
    const timeoutId = setTimeout(() => {
      currentTimer.stop();
      done(`таймер не завершился, функция не выполнилась`);
    }, 1100);
  });

  it(`пустой коллбэк`, (done) => {
    let currentTimer = new Timer(1);
    setTimeout(() => {
      assert.equal(currentTimer.counter, 0);
      done();
    }, 1100);
  });

  it(`коллбэк не функция`, (done) => {
    let currentTimer = new Timer(1, 6);
    setTimeout(() => {
      assert.equal(currentTimer.counter, 0);
      done();
    }, 1100);
  });
});

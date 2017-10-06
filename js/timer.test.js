import assert from 'assert';
import Timer from './timer.js';

describe(`timer`, () => {
  it(`if timer !== 30`, () => {
    assert.equal(Timer.counter, 30);
  });

  // it(`if timer !== 30`, () => {
  //   assert.equal(Timer(34), false);
  // });
});

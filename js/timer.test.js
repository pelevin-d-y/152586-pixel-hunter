import assert from 'assert';
import timer from './timer.js';

describe(timer, () => {
  it(`if timer !== 30`, () => {
    assert.equal(timer(29), -1);
  });

  it(`if timer !== 30`, () => {
    assert.equal(timer(34), -1);
  });

  it(`if timer tick == 1sec`, () => {

  });
});

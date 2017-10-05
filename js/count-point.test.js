import assert from 'assert';
import countPoint from './count-point.js';

describe(`count point`, () => {
  it(`if answers < 10, function return -1`, () => {
    assert(countPoint([{answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}], 3), -1);
  });

  it(`if the number of answers is 10, lives = 3, and the speed is normal then the points are equal to 1150 `, () => {
    assert.equal(countPoint([{answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}], 3), 1150);
  });

  it(`if the number of answers is 10, lives = 3, and the speed is slow then the points are equal to 650 `, () => {
    assert.equal(countPoint([{answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}], 3), 650);
  });

  it(`if the number of answers is 10, lives = 3, and the speed is fast then the points are equal to 1650 `, () => {
    assert.equal(countPoint([{answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}], 3), 1650);
  });

  it(`if the number of answers is 10, lives = 2, and the speed is normal then the points are equal to 1100 `, () => {
    assert.equal(countPoint([{answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}], 2), 1100);
  });

  it(`if the number of answers is 10, lives = 0, and the speed is normal then function return -1 `, () => {
    assert.equal(countPoint([{answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}], 0), -1);
  });

  it(`if the number of answers is 10, lives = 1, and the speed is 2 slow, 2 fast, and the rest are normal then function return 1050 `, () => {
    assert.equal(countPoint([{answer: false, speed: `slow`}, {answer: false, speed: `slow`}, {answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}], 1), 850);
  });

  it(`if the number of answers is 10, lives > 3 then function return -1 `, () => {
    assert.equal(countPoint([{answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}], 4), -1);
  });
});

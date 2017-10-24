import levels from './data/data-levels.js';

const currentStatistics = (game, timeAnswer) => {
  const currentLevel = game.currentLevel;
  game.statistics[currentLevel] = game.timeAnswer[timeAnswer];
};

const getCurrentLevel = (game) => {
  const index = game.levels.indexOf(game.currentLevel);
  return game.levels.length > index ? game.levels[index + 1] : null;
};

const conditionCurrentStateTrue = (game) => {
  if (game.timer.counter > 20) {
    currentStatistics(game, `fastAnswer`);
  } else if (game.timer.counter > 10) {
    currentStatistics(game, `normalAnswer`);
  } else if (game.timer.counter > 0) {
    currentStatistics(game, `slowAnswer`);
  }
};

const conditionCurrentStateFalse = (game) => {
  currentStatistics(game, `wrongAnswer`);
  game.lives--;
};

const getCurrentStateAllGame = (game) => {
  const currentLevel = game.currentLevel;
  const trueLevelAnswers = levels[currentLevel].question.answers;
  let currentUserAnswers = game.userAnswers[currentLevel];

  const newTrueAnswers = {};

  trueLevelAnswers.forEach((answer, i) => {
    newTrueAnswers[`${i + 1}src`] = answer.url;
    newTrueAnswers[`${i + 1}true`] = answer.true;
  });

  const keysNewTrueAnswers = Object.keys(newTrueAnswers).sort();
  const keysCurrentUserAnswers = Object.keys(currentUserAnswers).sort();

  const trueAnswersArray = [];
  const currentUserAnswersArray = [];

  keysNewTrueAnswers.forEach((element) => {
    trueAnswersArray.push(newTrueAnswers[element]);
  });

  keysCurrentUserAnswers.forEach((element) => {
    currentUserAnswersArray.push(currentUserAnswers[element]);
  });

  const resultAnswers = currentUserAnswersArray.filter((element, i) => {
    return element !== trueAnswersArray[i];
  });

  if (resultAnswers.length === 0) {
    conditionCurrentStateTrue(game);
  } else {
    conditionCurrentStateFalse(game);
  }
};

export {getCurrentLevel, getCurrentStateAllGame};

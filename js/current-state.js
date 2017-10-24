import levels from './data/data-levels.js';
import answers from './data/data-answers.js';

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


const getCurrentStateGame1 = (game) => {
  const currentLevel = game.currentLevel;

  for (let i = 0; levels[currentLevel].question.answers.length > i; i++) {
    const gameAnswersKeys = Object.keys(game.userAnswers[currentLevel]).sort();

    let currentAnswerKey = gameAnswersKeys[i];

    const currentUserAnswerLevel = game.userAnswers[currentLevel];

    if (currentUserAnswerLevel[currentAnswerKey] === levels[currentLevel].question.answers[i].true) {
      conditionCurrentStateTrue(game);
    } else {
      conditionCurrentStateFalse(game);
      break;
    }
  }
};

const getCurrentStateGame3 = (game, src) => {
  const answersKeys = Object.keys(answers);

  for (let answer of answersKeys) {
    if (answers[answer].url === src) {
      if (answers[answer].true === `paint`) {
        conditionCurrentStateTrue(game);
      } else {
        conditionCurrentStateFalse(game);
        break;
      }
    }
  }
};

export {getCurrentStateGame1, getCurrentStateGame3, getCurrentLevel};

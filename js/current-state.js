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

const getCurrentStateGame1 = (game) => {
  const currentLevel = game.currentLevel;
  console.log(currentLevel);

  for (let i = 0; levels[currentLevel].question.answers.length > i; i++) {
    const gameAnswersKeys = Object.keys(game.userAnswers[currentLevel]).sort();

    let currentAnswerKey = gameAnswersKeys[i];

    const currentUserAnswerLevel = game.userAnswers[currentLevel];

    if (currentUserAnswerLevel[currentAnswerKey] === levels[currentLevel].question.answers[i].true) {
      currentStatistics(game, `normalAnswer`);
    } else {
      currentStatistics(game, `wrongAnswer`);
      game.lives--;
      break;
    }
  }
};

const getCurrentStateGame3 = (game, src) => {
  const answersKeys = Object.keys(answers);
  for (let answer of answersKeys) {
    if (answers[answer].url === src) {
      if (answers[answer].true === `paint`) {
        currentStatistics(game, `normalAnswer`);
        break;
      } else {
        currentStatistics(game, `wrongAnswer`);
        game.lives--;
        break;
      }
    }
  }
};

export {getCurrentStateGame1, getCurrentStateGame3, getCurrentLevel};

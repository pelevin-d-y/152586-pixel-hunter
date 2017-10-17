import levels from './data/data-levels.js';
import answers from './data/data-answers.js';

const currentStatistics = (game, timeAnswer) => {
  const currentLevel = game.currentLevel;
  game.statistics[currentLevel] = game.timeAnswer[timeAnswer];
};

const getCurrentLevel = (game) => {
  game.currentLevel = game.levels[0];
  game.levels.shift();
};

const getCurrentStateGame1 = (game) => {
  const currentLevel = game.currentLevel;

  for (let i = 0; levels[currentLevel].question.answers.length > i; i++) {
    const gameAnswersKeys = Object.keys(game.userAnswers[currentLevel]);
    let currentAnswerKey = gameAnswersKeys[i];

    const currentUserAnswerLevel = game.userAnswers[currentLevel];

    if (currentUserAnswerLevel[currentAnswerKey] === levels[currentLevel].question.answers[i].true) {
      currentStatistics(game, `normalAnswer`);
      game = game;
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
        game = game;
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

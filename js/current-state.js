import levels from './data/data-levels.js';
import answers from './data/data-answers.js';

const getCurrentLevel = (game) => {
  game.currentLevel = game.levels[0];
  game.levels.shift();
};

const getCurrentStateGame1 = (game) => {
  const currentLevel = game.currentLevel;
  game.statistics[currentLevel] = `<li class="stats__result stats__result--correct">`;

  for (let i = 0; levels[currentLevel].question.answers.length > i; i++) {
    const gameAnswersKeys = Object.keys(game.userAnswers[currentLevel]);
    let currentAnswerKey = gameAnswersKeys[i];

    const currentUserAnswerLevel = game.userAnswers[currentLevel];

    if (currentUserAnswerLevel[currentAnswerKey] === levels[currentLevel].question.answers[i].true) {
      game = game;
    } else {
      game.lives--;
      break;
    }
  }
};

const getCurrentStateGame3 = (game, src) => {
  const currentLevel = game.currentLevel;
  game.statistics[currentLevel] = `<li class="stats__result stats__result--correct">`;
  const answersKeys = Object.keys(answers);
  for (let answer of answersKeys) {
    if (answers[answer].url === src) {
      if (answers[answer].true === `paint`) {
        game = game;
        break;
      } else {
        game.lives--;
        break;
      }
    }
  }
};

export {getCurrentStateGame1, getCurrentStateGame3, getCurrentLevel};

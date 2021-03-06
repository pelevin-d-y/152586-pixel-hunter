import {game2} from '../game-2/game-2.js';
import {getCurrentStateAllGame} from '../../current-state.js';
import Game1View from './game-1-view.js';
import {showStatsScreen, showGameScreen, showBackScreen, initGameLevel} from '../game-utils.js';

const game1 = (game) => {
  const viewGame1 = new Game1View(game);

  initGameLevel(game);

  viewGame1.nextView = (evt, answerIndex, imageSrc, value) => {
    game.userAnswers[game.currentLevel][`answer${answerIndex}Src`] = imageSrc;
    game.userAnswers[game.currentLevel][`answer${answerIndex}Type`] = value;

    const allAnswered = [1, 2].every((aIndex) => game.userAnswers[game.currentLevel][`answer${aIndex}Type`]);
    if (allAnswered) {
      getCurrentStateAllGame(game);

      if (game.currentLevel === game.levels[game.levels.length - 1] || game.lives < 0) {
        showStatsScreen(game);
        return;
      }

      showGameScreen(game, game2);
    }
  };

  viewGame1.backView = () => showBackScreen(game);

  return viewGame1;
};

export {game1};

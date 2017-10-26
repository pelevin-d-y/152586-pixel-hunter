import {game1} from '../game-1/game-1.js';
import {getCurrentStateAllGame} from '../../current-state.js';
import ViewGame3 from './game-3-view.js';
import {showStatsScreen, showGameScreen, showBackScreen, initGameLevel} from '../game-utils.js';

const game3 = (game) => {
  const viewGame3 = new ViewGame3(game);

  initGameLevel(game);

  viewGame3.nextView = (evt, answerIndex, imageSrc, value) => {
    game.userAnswers[game.currentLevel][`answer${answerIndex}Src`] = imageSrc;
    game.userAnswers[game.currentLevel][`answer${answerIndex}Type`] = value;

    getCurrentStateAllGame(game);

    if (game.currentLevel === game.levels[game.levels.length - 1] || game.lives < 0) {
      showStatsScreen(game);
      return;
    }

    showGameScreen(game, game1);
  };

  viewGame3.backView = () => showBackScreen(game);

  return viewGame3;
};

export {game3};

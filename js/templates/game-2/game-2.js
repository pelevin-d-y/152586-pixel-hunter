import {getCurrentStateGame1} from '../../current-state.js';
import ViewGame2 from './game-2-view.js';
import {game3} from '../game-3/game-3.js';
import {showStatsScreen, showGameScreen, showBackScreen, initGameLevel} from '../game-utils.js';

const game2 = (game) => {
  const viewGame2 = new ViewGame2(game);

  initGameLevel(game);

  viewGame2.nextView = (evt, answerIndex, value) => {
    game.userAnswers[game.currentLevel][`answer${answerIndex}`] = value;
    getCurrentStateGame1(game);

    if (game.currentLevel === game.levels[game.levels.length - 1] || game.lives < 0) {
      showStatsScreen(game);
      return;
    }

    showGameScreen(game, game3);
  };

  viewGame2.backView = () => showBackScreen(game);

  return viewGame2;
};

export {game2};

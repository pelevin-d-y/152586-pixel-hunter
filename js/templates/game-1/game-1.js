import showWindow from '../../show-window.js';
import {game2} from '../game-2/game-2.js';
import {getCurrentStateGame1, getCurrentLevel} from '../../current-state.js';
import Game1View from './game-1-view.js';
import {intro} from '../intro/intro.js';
import {stats} from '../stats/stats.js';

const game1 = (game) => {
  const viewGame1 = new Game1View(game);

  viewGame1.currentLevel = () => {
    game.currentLevel = getCurrentLevel(game);
    game.userAnswers[game.currentLevel] = {};
  };

  viewGame1.getCurrentState = () => {
    getCurrentStateGame1(game);
  };

  viewGame1.nextView = () => {
    showWindow(game2(game));
  };

  viewGame1.backView = () => {
    showWindow(intro);
  };

  viewGame1.statsView = () => {
    showWindow(stats(game));
  };

  return viewGame1;
};

export {game1};

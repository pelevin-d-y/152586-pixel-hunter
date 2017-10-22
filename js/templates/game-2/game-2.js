import showWindow from '../../show-window.js';
import {getCurrentStateGame1, getCurrentLevel} from '../../current-state.js';
import ViewGame2 from './game-2-view.js';
import {intro} from '../intro/intro.js';
import {game3} from '../game-3/game-3.js';
import {stats} from '../stats/stats.js';

const game2 = (game) => {
  const viewGame2 = new ViewGame2(game);

  viewGame2.currentLevel = () => {
    game.currentLevel = getCurrentLevel(game);
    game.userAnswers[game.currentLevel] = {};
  };

  viewGame2.getCurrentState = () => {
    getCurrentStateGame1(game);
  };

  viewGame2.nextView = () => {
    showWindow(game3(game));
  };

  viewGame2.backView = () => {
    showWindow(intro);
  };

  viewGame2.statsView = () => {
    showWindow(stats(game));
  };

  return viewGame2;
};

export {game2};

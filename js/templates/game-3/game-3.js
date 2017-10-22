import showWindow from '../../show-window.js';
import {stats} from '../stats/stats.js';
import {game1} from '../game-1/game-1.js';
import {getCurrentStateGame3, getCurrentLevel} from '../../current-state.js';
import ViewGame3 from './game-3-view.js';
import {intro} from '../intro/intro.js';

const game3 = (game) => {
  const viewGame3 = new ViewGame3(game);

  viewGame3.currentLevel = () => {
    game.currentLevel = getCurrentLevel(game);
    game.userAnswers[game.currentLevel] = {};
  };

  viewGame3.getCurrentState = () => {
    getCurrentStateGame3(game, game.srcCurrentImage);
  };

  viewGame3.nextView = () => {
    showWindow(game1(game));
  };

  viewGame3.backView = () => {
    showWindow(intro);
  };

  viewGame3.statsView = () => {
    showWindow(stats(game));
  };

  return viewGame3;
};


export {game3};

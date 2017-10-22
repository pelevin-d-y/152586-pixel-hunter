import showWindow from '../../show-window.js';
import {getCurrentStateGame1, getCurrentLevel} from '../../current-state.js';
import ViewGame2 from './game-2-view.js';
import {intro} from '../intro/intro.js';
import {game3} from '../game-3/game-3.js';
import {stats} from '../stats/stats.js';
import answersPoint from '../stats/stats-answers.js';
import Timer from '../../timer.js';

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
    game.timer.stop();
    game.timer = new Timer(30);
    showWindow(game3(game));
  };

  viewGame2.backView = () => {
    showWindow(intro);
  };

  viewGame2.statsView = () => {
    answersPoint(game);
    showWindow(stats(game));
  };

  return viewGame2;
};

export {game2};

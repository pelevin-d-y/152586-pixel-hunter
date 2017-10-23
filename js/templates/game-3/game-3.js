import showWindow from '../../show-window.js';
import {stats} from '../stats/stats.js';
import {game1} from '../game-1/game-1.js';
import {getCurrentStateGame3, getCurrentLevel} from '../../current-state.js';
import ViewGame3 from './game-3-view.js';
import {intro} from '../intro/intro.js';
import answersPoint from '../stats/stats-answers.js';
import Timer from '../../timer.js';

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
    game.timer.stop();
    game.timer = new Timer(30);
    showWindow(game1(game));
  };

  viewGame3.backView = () => {
    game.timer.stop();
    showWindow(intro);
  };

  viewGame3.statsView = () => {
    game.timer.stop();
    answersPoint(game);
    showWindow(stats(game));
  };

  return viewGame3;
};


export {game3};

import showWindow from '../../show-window.js';
import RulesView from './rules-view.js';
import {intro} from '../intro/intro.js';
import {game1} from '../game-1/game-1.js';
import Timer from '../../timer.js';

const rules = (game) => {
  const rulesView = new RulesView(game);

  rulesView.nextView = () => {
    game.timer = new Timer(30);
    showWindow(game1(game));
  };

  rulesView.backView = () => {
    showWindow(intro);
  };
  return rulesView;
};

export {rules};

import showWindow from '../../show-window.js';
import RulesView from './rules-view.js';
import {Game1Screen} from '../game-1/game-1.js';
import Timer from '../../timer.js';
import {initialState, StartGame} from '../../data/data.js';
import levels from '../../data/data-levels.js';
import {showBackScreen} from '../game-utils.js';

const game = new StartGame(initialState);
const keysLevels = Object.keys(levels);

for (let key of keysLevels) {
  game.statistics[key] = `unknown`;
}

class RulesScreen {
  constructor() {
    this.view = new RulesView(game);
  }

  init() {
    showWindow(this.view);

    this.view.nextView = () => {
      game.timer = new Timer(30);
      new Game1Screen(game).init();
    };

    this.view.backView = () => showBackScreen(this.game);
  }
}

const rulesScreen = new RulesScreen();

export {rulesScreen};

import showWindow from '../../show-window.js';
import RulesView from './rules-view.js';
import {intro, introScreen} from '../intro/intro.js';
import {game1, Game1Screen} from '../game-1/game-1.js';
import Timer from '../../timer.js';
import {initialState, startGame} from '../../data/data.js';
import levels from '../../data/data-levels.js';


const game = startGame(initialState);
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
      new Game1Screen(game).init();
    };

    this.view.backView = () => {
      introScreen.init();
    };
  }
}

const rulesScreen = new RulesScreen();

// const rules = (game) => {
//   const rulesView = new RulesView(game);

//   rulesView.nextView = () => {
//     game.timer = new Timer(30);
//     showWindow(game1(game));
//   };

//   rulesView.backView = () => {
//     showWindow(intro);
//   };
//   return rulesView;
// };

export {rules, rulesScreen};

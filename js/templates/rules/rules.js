import showWindow from '../../show-window.js';
import RulesView from './rules-view.js';
import App from '../../app.js';
import {initialState, StartGame} from '../../data/data.js';
import levels from '../../data/data-levels.js';
import {IntroScreen} from '../intro/intro.js';

class RulesScreen {
  constructor() {
    const game = new StartGame(initialState);
    const keysLevels = Object.keys(levels);

    for (let key of keysLevels) {
      game.statistics[key] = `unknown`;
    }

    this.view = new RulesView(game);
    this.game = game;
  }

  init() {
    showWindow(this.view);
    this.view.nextView = () => {
      App.showGame1Screen(this.game);
    };

    this.view.backView = () => new IntroScreen().init();
  }
}

export {RulesScreen};

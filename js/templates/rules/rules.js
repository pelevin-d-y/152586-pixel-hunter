import showWindow from '../../show-window.js';
import RulesView from './rules-view.js';
import App from '../../app.js';
import {IntroScreen} from '../intro/intro.js';

class RulesScreen {
  constructor(game) {
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

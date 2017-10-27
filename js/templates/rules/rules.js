import showWindow from '../../show-window.js';
import RulesView from './rules-view.js';
import Timer from '../../timer.js';
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
      // this.game.timer = new Timer(30, () => {
      //   App.showGame2Screen(this.game);
      // });

      App.showGame1Screen(this.game);
    };

    this.view.backView = () => new IntroScreen().init();
  }
}

export {RulesScreen};

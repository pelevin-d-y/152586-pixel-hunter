import showWindow from '../../show-window.js';
import GreetingView from './view-greeting.js';
import App from '../../app.js';

class GreetingScreen {
  constructor(game) {
    this.view = new GreetingView(game);
    this.game = game;
  }

  init() {
    showWindow(this.view);

    this.view.nextView = () => {
      App.showRulesScreen(this.game);
    };
  }
}

export {GreetingScreen};

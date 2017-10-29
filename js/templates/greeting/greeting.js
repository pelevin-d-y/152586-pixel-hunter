import showWindow from '../../show-window.js';
import GreetingView from './view-greeting.js';
import App from '../../app.js';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    showWindow(this.view);

    this.view.nextView = () => {
      App.showRulesScreen();
    };
  }
}

export {GreetingScreen};

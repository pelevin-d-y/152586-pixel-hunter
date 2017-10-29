import showWindow from '../../show-window.js';
import IntroView from './intro-view.js';
import App from '../../app.js';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    showWindow(this.view);

    this.view.nextView = () => {
      App.showGreetingScreen();
    };
  }
}

export {IntroScreen};

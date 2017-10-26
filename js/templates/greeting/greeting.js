import showWindow from '../../show-window.js';
import {rules, rulesScreen} from '../rules/rules.js';
import GreetingView from './view-greeting.js';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    showWindow(this.view);

    this.view.nextView = () => {
      rulesScreen.init();
    };
  }
}

const greetingScreen = new GreetingScreen();

export {greeting, greetingScreen};

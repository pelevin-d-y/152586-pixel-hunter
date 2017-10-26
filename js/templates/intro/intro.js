import showWindow from '../../show-window.js';
import {greeting, greetingScreen} from '../greeting/greeting.js';
import IntroView from './intro-view.js';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    showWindow(this.view);

    this.view.nextView = () => {
      greetingScreen.init();
    };
  }
}

const introScreen = new IntroScreen();

export {intro, introScreen};

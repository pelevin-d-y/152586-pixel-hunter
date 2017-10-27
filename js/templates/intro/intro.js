import showWindow from '../../show-window.js';
import {GreetingScreen} from '../greeting/greeting.js';
import IntroView from './intro-view.js';
import {initialState, StartGame} from '../../data/data.js';
import levels from '../../data/data-levels.js';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    showWindow(this.view);

    this.view.nextView = () => {
      new GreetingScreen().init();
    };
  }
}

export {IntroScreen};

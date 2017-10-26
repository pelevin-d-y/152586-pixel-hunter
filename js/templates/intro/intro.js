import showWindow from '../../show-window.js';
import {greeting} from '../greeting/greeting.js';
import IntroView from './intro-view.js';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }
  init() {
    showWindow(this.view);
  }
}

const intro = new IntroView();
intro.nextView = () => {
  showWindow(greeting);
};

const introTemplate = 0;
const showGreetingTemplate = 0;

export {introTemplate, showGreetingTemplate, intro, IntroScreen};

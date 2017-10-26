import showWindow from '../../show-window.js';
import {greeting} from '../greeting/greeting.js';
import IntroView from './intro-view.js';

const intro = new IntroView();
intro.nextView = () => {
  showWindow(greeting);
};

const introTemplate = 0;
const showGreetingTemplate = 0;

export {introTemplate, showGreetingTemplate, intro};

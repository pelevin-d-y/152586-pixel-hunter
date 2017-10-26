import showWindow from './show-window.js';
import countPoint from './count-point.js';
import {intro} from './templates/intro/intro.js';
import App from './app.js';

App.showIntroScreen();

showWindow(intro);

countPoint([{answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}], 1);

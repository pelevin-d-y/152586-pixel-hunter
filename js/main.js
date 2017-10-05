import showWindow from './show-window.js';
import countPoint from './count-point.js';
import timer from './timer.js';
import {introTemplate, showGreetingTemplate} from './templates/intro.js';

showWindow(introTemplate);
showGreetingTemplate();

countPoint([{answer: true, speed: `fast`}, {answer: true, speed: `fast`}, {answer: true, speed: `slow`}, {answer: true, speed: `slow`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}, {answer: true, speed: `normal`}], 1);

timer(30);

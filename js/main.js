import showWindow from './show-window.js';
import countPoint from './count-point.js';
import {introTemplate, showGreetingTemplate} from './templates/intro.js';

showWindow(introTemplate);
showGreetingTemplate();

countPoint([{ansver: true, speed: `fast`}, {ansver: true, speed: `fast`}, {ansver: true, speed: `slow`}, {ansver: true, speed: `slow`}, {ansver: true, speed: `normal`}, {ansver: true, speed: `normal`}, {ansver: true, speed: `normal`}, {ansver: true, speed: `normal`}, {ansver: true, speed: `normal`}, {ansver: true, speed: `normal`}], 1);

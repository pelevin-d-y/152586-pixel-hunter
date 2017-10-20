import showWindow from '../../show-window.js';
import {rules} from '../rules/rules.js';
import {initialState, startGame} from '../../data/data.js';
import levels from '../../data/data-levels.js';
import GreetingView from './view-greeting.js';

const game = startGame(initialState);
const keysLevels = Object.keys(levels);

for (let key of keysLevels) {
  game.statistics[key] = `unknown`;
}

const greeting = new GreetingView();

greeting.nextView = () => {
  showWindow(rules(game));
};

export {greeting};

import answersPoint from './stats/stats-answers.js';
import showWindow from './../show-window.js';
import {stats} from './stats/stats.js';
import Timer from '../timer.js';
import {intro} from './intro/intro.js';
import {getCurrentLevel} from '../current-state.js';

const showStatsScreen = (game) => {
  game.timer.stop();
  answersPoint(game);
  showWindow(stats(game));
};

const showGameScreen = (game, gameFunc) => {
  game.timer.stop();
  game.timer = new Timer(30);
  showWindow(gameFunc(game));
};

const showBackScreen = (game) => {
  game.timer.stop();
  showWindow(intro);
};

const initGameLevel = (game) => {
  game.currentLevel = getCurrentLevel(game);
  game.userAnswers[game.currentLevel] = {};
};

export {showStatsScreen, showGameScreen, showBackScreen, initGameLevel};

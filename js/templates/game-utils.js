import answersPoint from './stats/stats-answers.js';
import showWindow from './../show-window.js';
import {stats} from './stats/stats.js';
import Timer from '../timer.js';
import {IntroScreen} from './intro/intro.js';
import {getCurrentLevel} from '../current-state.js';

const showStatsScreen = (game) => {
  game.timer.stop();
  answersPoint(game);
  showWindow(stats(game));
};

const showGameScreen = (game, gameFunc) => {
  game.timer.stop();
  game.timer = new Timer(30);
  return gameFunc;
};

const showBackScreen = (game) => {
  game.timer.stop();
  new IntroScreen().init();
};

const initGameLevel = (game) => {
  game.currentLevel = getCurrentLevel(game);
  game.userAnswers[game.currentLevel] = {};
};

const bodyTemplate = (thisStatistics, gameOption, question, bodyType) => {
  const content = question.answers.map((answer, i) => {
    return gameOption(answer, i + 1);
  }).join(``);

  const statistics = Object.keys(thisStatistics).map((element) => {
    return `<li class="stats__result stats__result--` + thisStatistics[element] + `"></li>`;
  }).join(``);

  return `<div class="game">
<p class="game__task">${question.text}</p>
<form class="game__content ${bodyType}">
  ${content}
</form>
<div class="stats">
  <ul class="stats">
    ${statistics}
  </ul>
</div>
</div>`;
};

export {showStatsScreen, showGameScreen, showBackScreen, initGameLevel, bodyTemplate};

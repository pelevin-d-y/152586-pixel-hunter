import showWindow from '../../show-window.js';
import getElementFromTemplate from '../../utils.js';
import {game3Template, showStatsTemplate} from '../game-3/game-3.js';
import {introTemplate, showGreetingTemplate} from '../intro/intro.js';
import {headerTemplate, headerBackTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';
import {getCurrentStateGame1, getCurrentLevel} from '../../current-state.js';
import {statsTemplate, showIntroTemplate} from '../stats/stats.js';
import Game2View from './game-2-view.js';

const getGameOption = (answer) =>
  `<div class="game__option">
  <img src="${answer.url}" alt="Option 1" width="705" height="455">
  <label class="game__answer  game__answer--photo">
    <input name="question1" type="radio" value="photo">
    <span>Фото</span>
  </label>
  <label class="game__answer  game__answer--wide  game__answer--paint">
    <input name="question1" type="radio" value="paint">
    <span>Рисунок</span>
  </label>
</div>`;


const bodyTemplate = (data) => {
  const content = data.gameQuestions.question2.answers.map((answer) => {
    return getGameOption(answer);
  }).join(``);

  const statistics = Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``);

  return `<div class="game">
<p class="game__task">${data.gameQuestions.question2.text}</p>
<form class="game__content  game__content--wide">
  ${content}
</form>
<div class="stats">
  <ul class="stats">
    ${statistics}
  </ul>
</div>
</div>`;
};

// function game2Template(game) {
//   return getElementFromTemplate(headerTemplate(game, headerBackTemplate) + bodyTemplate(game) + footerTemplat);
// }

// const showGame3Template = (game) => {
//   game.currentLevel = getCurrentLevel(game);
//   const currentLevel = game.currentLevel;
//   game.userAnswers[currentLevel] = {};

//   const controlElementsGame2 = Array.from(document.querySelectorAll(`.game__answer`));
//   const backButton = document.querySelector(`.back`);

//   backButton.addEventListener(`click`, () => {
//     showWindow(introTemplate);
//     showGreetingTemplate();
//   });

//   controlElementsGame2.forEach((element) => {
//     element.addEventListener(`change`, (evt) => {
//       game.userAnswers[currentLevel].answer = evt.target.value;
//       getCurrentStateGame1(game);
//       if (game.lives < 0) {
//         showWindow(statsTemplate(game));
//         showIntroTemplate();
//         return;
//       }

//       if (game.currentLevel === game.levels[game.levels.length - 1]) {
//         showWindow(statsTemplate(game));
//         showIntroTemplate();
//         return;
//       }

//       showWindow(game3Template(game));
//       showStatsTemplate(game);
//     });
//   });
// };


const game2 = (game) => {
  const viewGame2 = new Game2View(game);
  return viewGame2;
};

const game2Template = 0;
const showGame3Template = 0;

export {game2Template, showGame3Template, game2};

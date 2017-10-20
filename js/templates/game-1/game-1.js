import showWindow from '../../show-window.js';
import {game2Template, showGame3Template} from '../game-2/game-2.js';
import {introTemplate, showGreetingTemplate} from '../intro/intro.js';
import {headerTemplate, headerBackTemplate} from '../header/header.js';
import {getCurrentStateGame1, getCurrentLevel} from '../../current-state.js';
import {statsTemplate, showIntroTemplate} from '../stats/stats.js';
import Game1View from './game-1-view.js';

// const getGameOption = (answer, index) => `<div class="game__option">
// <img src="${answer.url}" alt="Option ${index}" width="468" height="458">
// <label class="game__answer game__answer--photo">
//   <input class="game-1__checkbox" name="question${index}" type="radio" value="photo">
//   <span>Фото</span>
// </label>
// <label class="game__answer game__answer--paint">
//   <input class="game-1__checkbox" name="question${index}" type="radio" value="paint">
//   <span>Рисунок</span>
// </label>
// </div>`;

// const bodyTemplate = (data) => {
//   const content = data.gameQuestions.question1.answers.map((answer, i) => {
//     return getGameOption(answer, i + 1);
//   }).join(``);

//   const statistics = Object.keys(data.statistics).map((element) => {
//     return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
//   }).join(``);

//   return `<div class="game">
// <p class="game__task">${data.gameQuestions.question1.text}</p>
// <form class="game__content">
//   ${content}
// </form>
// <div class="stats">
//   <ul class="stats">
//     ${statistics}
//   </ul>
// </div>
// </div>`;
// };

// function game1Template(game) {
//   return getElementFromTemplate(headerTemplate(game, headerBackTemplate) + bodyTemplate(game) + footerTemplat);
// }

const showGame2Template = (game) => {

  game.currentLevel = getCurrentLevel(game);
  const currentLevel = game.currentLevel;
  game.userAnswers[currentLevel] = {};

  const images = Array.from(document.querySelectorAll(`.game__option`));
  const controlElementsGame1 = images.map((option) => option.querySelectorAll(`.game-1__checkbox`));

  const backButton = document.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    showWindow(introTemplate);
    showGreetingTemplate();
  });

  images.forEach((element) => {
    element.addEventListener(`change`, (evt) => {
      if (evt.currentTarget === images[0]) {
        game.userAnswers[currentLevel].answer1 = evt.target.value;
      } else {
        game.userAnswers[currentLevel].answer2 = evt.target.value;
      }

      const isChecked = controlElementsGame1.every((checkbox) => checkbox[0].checked || checkbox[1].checked);
      if (isChecked) {
        getCurrentStateGame1(game);

        if (game.lives < 0) {
          showWindow(statsTemplate(game));
          showIntroTemplate();
          return;
        }

        if (game.currentLevel === game.levels[game.levels.length - 1]) {
          showWindow(statsTemplate(game));
          showIntroTemplate();
          return;
        }
        showWindow(game2Template(game));
        showGame3Template(game);
      }
    });
  });
};


const game1 = (game) => {
  const viewGame1 = new Game1View(game);

  viewGame1.nextView = () => {
    showWindow(game2(game));
  };

  return viewGame1;
};

const game1Template = 0;

export {game1Template, showGame2Template, game1};

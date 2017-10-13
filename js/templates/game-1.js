import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {game2Template, showGame3Template} from './game-2.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import {initialState} from '../data/data.js';
import levels from '../data/data-levels.js';
import answers from '../data/data-answers.js';
import {headerTemplate, headerBackTemplate} from './header.js';
import footerTemplat from './footer.js';

const bodyTemplate = (data) => `<div class="game">
<p class="game__task">${data.level1.question.text}</p>
<form class="game__content">
${levels.level1.question.answers.map((answer, i) =>
    `<div class="game__option">
    <img src="${answer.url}" alt="Option ${i + 1}" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="game-1__checkbox" name="question${i + 1}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="game-1__checkbox" name="question${i + 1}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`
  ).join(``)
}
</form>
<div class="stats">
  <ul class="stats">
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--correct"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
  </ul>
</div>
</div>`;

function game1Template() {
  return getElementFromTemplate(headerTemplate(initialState, headerBackTemplate) + bodyTemplate(levels) + footerTemplat);
}

const getCurrentStateGame1 = function (game) {
  if (game.userAnswers.level1.answer1 === answers.answer1.true && game.userAnswers.level1.answer2 === answers.answer4.true) {
    return game;
  } else {
    game.lives--;
    return game;
  }
};

const showGame2Template = (game) => {
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
        game.userAnswers.level1.answer1 = evt.target.value;
      } else {
        game.userAnswers.level1.answer2 = evt.target.value;
      }

      const isChecked = controlElementsGame1.every((checkbox) => checkbox[0].checked || checkbox[1].checked);
      if (isChecked) {
        getCurrentStateGame1(game);
        showWindow(game2Template(game));
        showGame3Template(game);
      }
    });
  });
};

export {game1Template, showGame2Template};

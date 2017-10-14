import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {game3Template, showStatsTemplate} from './game-3.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import levels from '../data/data-levels.js';
import {headerTemplate, headerBackTemplate} from './header.js';
import footerTemplat from './footer.js';
import {getCurrentStateGame1, getCurrentLevel} from '../current-state.js';

const bodyTemplate = (data) => `<div class="game">
<p class="game__task">${data.level2.question.text}</p>
<form class="game__content  game__content--wide">
${levels.level2.question.answers.map((answer) =>
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
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--unknown"></li>
  </ul>
</div>
</div>`;

function game2Template(game) {
  return getElementFromTemplate(headerTemplate(game, headerBackTemplate) + bodyTemplate(levels) + footerTemplat);
}

const showGame3Template = (game) => {
  getCurrentLevel(game);
  const currentLevel = game.currentLevel;

  const controlElementsGame2 = Array.from(document.querySelectorAll(`.game__answer`));
  const backButton = document.querySelector(`.back`);

  backButton.addEventListener(`click`, () => {
    showWindow(introTemplate);
    showGreetingTemplate();
  });

  controlElementsGame2.forEach((element) => {
    element.addEventListener(`change`, (evt) => {
      game.userAnswers[currentLevel].answer = evt.target.value;
      getCurrentStateGame1(game);
      showWindow(game3Template(game));
      showStatsTemplate(game);
    });
  });
};

export {game2Template, showGame3Template};

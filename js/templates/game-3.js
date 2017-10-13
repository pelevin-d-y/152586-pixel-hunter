import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {statsTemplate, showIntroTemplate} from './stats.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import levels from '../data/data-levels.js';
import {headerTemplate, headerBackTemplate} from './header.js';
import footerTemplat from './footer.js';
import answers from '../data/data-answers.js';

const bodyTemplate = (data) => `<div class="game">
<p class="game__task">${data.level3.question.text}</p>
<form class="game__content  game__content--triple">
${levels.level3.question.answers.map((answer) =>
    `<div class="game__option">
      <img src="${answer.url}" alt="Option 1" width="304" height="455">
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

function game3Template(game) {
  return getElementFromTemplate(headerTemplate(game, headerBackTemplate) + bodyTemplate(levels) + footerTemplat);
}

const getCurrentStateGame3 = function (game, src) {
  const answersKeys = Object.keys(answers);
  for (let answer of answersKeys) {
    if (answers[answer].url === src || answers[answer].true === `paint`) {
      console.log(game);
      return game;
    } else {
      console.log(game);
      return game.lives--;
    }
  }
  //game.userAnswers.level3.answer
};

const showStatsTemplate = (game) => {
  const controlElementsGame3 = Array.from(document.querySelectorAll(`.game__option`));

  const backButton = document.querySelector(`.back`);

  backButton.addEventListener(`click`, () => {
    showWindow(introTemplate);
    showGreetingTemplate();
  });

  controlElementsGame3.forEach((element) => {
    element.addEventListener(`click`, (evt) => {

      const srcCurrentImage = evt.target.children[0].getAttribute(`src`);
      game.userAnswers.level3.answer = srcCurrentImage;
      getCurrentStateGame3(game, srcCurrentImage);

      showWindow(statsTemplate(game));
      showIntroTemplate();
    });
  });
};

export {game3Template, showStatsTemplate};

import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {statsTemplate, showIntroTemplate} from './stats.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import levels from '../data/data-levels.js';
import {headerTemplate, headerBackTemplate} from './header.js';
import footerTemplat from './footer.js';

const bodyTemplate = (data) => `<div class="game">
<p class="game__task">${levels.level3.question}</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    <img src="${data.level3.questionImageUrl1}" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
    <img src="${data.level3.questionImageUrl2}" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="${data.level3.questionImageUrl3}" alt="Option 1" width="304" height="455">
  </div>
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

const showStatsTemplate = () => {
  const controlElementsGame3 = Array.from(document.querySelectorAll(`.game__option`));

  const backButton = document.querySelector(`.back`);

  backButton.addEventListener(`click`, () => {
    showWindow(introTemplate);
    showGreetingTemplate();
  });

  controlElementsGame3.forEach((element) => {
    element.addEventListener(`click`, () => {
      showWindow(statsTemplate);
      showIntroTemplate();
    });
  });
};

export {game3Template, showStatsTemplate};

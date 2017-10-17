import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {statsTemplate, showIntroTemplate} from './stats.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import {headerTemplate, headerBackTemplate} from './header.js';
import footerTemplat from './footer.js';
import {getCurrentStateGame3, getCurrentLevel} from '../current-state.js';
import {game1Template, showGame2Template} from './game-1.js';

const bodyTemplate = (data) => `<div class="game">
<p class="game__task">${data.questions[2].text}</p>
<form class="game__content  game__content--triple">
${data.questions[2].answers.map((answer) =>
    `<div class="game__option">
      <img src="${answer.url}" alt="Option 1" width="304" height="455">
    </div>`
  ).join(``)
}
 </form>
<div class="stats">
  <ul class="stats">
${
  Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``)
}
  </ul>
</div>
</div>`;

function game3Template(game) {
  return getElementFromTemplate(headerTemplate(game, headerBackTemplate) + bodyTemplate(game) + footerTemplat);
}

const showStatsTemplate = (game) => {
  game.currentLevel = getCurrentLevel(game);
  const currentLevel = game.currentLevel;
  game.userAnswers[currentLevel] = {};

  const controlElementsGame3 = Array.from(document.querySelectorAll(`.game__option`));

  const backButton = document.querySelector(`.back`);

  backButton.addEventListener(`click`, () => {
    showWindow(introTemplate);
    showGreetingTemplate();
  });

  controlElementsGame3.forEach((element) => {
    element.addEventListener(`click`, (evt) => {

      const srcCurrentImage = evt.target.children[0].getAttribute(`src`);
      game.userAnswers[currentLevel].answer = srcCurrentImage;
      getCurrentStateGame3(game, srcCurrentImage);

      if (game.lives < 0) {
        showWindow(statsTemplate(game));
        showIntroTemplate();
        return;
      }

      if (game.levels.length === 0) {
        showWindow(statsTemplate(game));
        showIntroTemplate();
        return;
      }

      showWindow(game1Template(game));
      showGame2Template(game);
    });
  });
};

export {game3Template, showStatsTemplate};

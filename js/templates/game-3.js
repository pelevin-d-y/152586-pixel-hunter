import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {statsTemplate, showIntroTemplate} from './stats.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import {initialState} from '../data/data.js';
import levels from '../data/data-levels.js';

const headerTemplate = (state) => `<header class="header">
<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>
<h1 class="game__timer">${state.time}</h1>
<div class="game__lives">
${new Array(3 - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
</div>
</header>`;

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
</div>
<footer class="footer">
<a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
<span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
<div class="footer__social-links">
  <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
  <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
  <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
  <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
</div>
</footer>`;

const game3Template = getElementFromTemplate(headerTemplate(initialState) + bodyTemplate(levels));

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

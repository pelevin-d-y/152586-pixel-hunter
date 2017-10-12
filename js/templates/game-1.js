import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {game2Template, showGame3Template} from './game-2.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import {initialState, userAnswers} from '../data/data.js';
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
<p class="game__task">${data.level1.question}</p>
<form class="game__content">
  <div class="game__option">
    <img src="${data.level1.questionImageUrl1}" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="game-1__checkbox" name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="game-1__checkbox" name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="${data.level1.questionImageUrl2}" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input class="game-1__checkbox" name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input class="game-1__checkbox" name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
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

const game1Template = getElementFromTemplate(headerTemplate(initialState) + bodyTemplate(levels));

const showGame2Template = () => {
  const images = Array.from(document.querySelectorAll(`.game__option`));
  const controlElementsGame1 = images.map((option) => option.querySelectorAll(`.game-1__checkbox`));

  const backButton = document.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    showWindow(introTemplate);
    showGreetingTemplate();
  });

  images.forEach((element) => {
    element.addEventListener(`change`, () => {

      controlElementsGame1.forEach((checkbox) => {
        console.log(checkbox[1]);
        //console.log(checkbox[1]);
        userAnswers.level1.answer1 = checkbox[0].value;
        userAnswers.level1.answer2 = checkbox[1].value;
      });

      const isChecked = controlElementsGame1.every((checkbox) => checkbox[0].checked || checkbox[1].checked);
      if (isChecked) {
        console.log(userAnswers);
        showWindow(game2Template);
        showGame3Template();
      }
    });
  });
};

export {game1Template, showGame2Template};

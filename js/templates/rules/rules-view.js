import AbstractView from '../../view.js';
import {headerBackTemplate} from '../header/header.js';

const form = `<form class="rules__form">
<input class="rules__input" type="text" placeholder="Ваше Имя">
<button class="rules__button  continue" type="submit" disabled>Go!</button>
</form>`;

class RulesView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return `<header class="header">
    ${headerBackTemplate}
    </header>
    <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай ${this.game.numberLevels} раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится ${this.game.time} секунд.<br>
      Ошибиться можно не более  ${this.game.lives} раз.<br>
      <br>
      Готовы?
    </p>
      ${form}
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
  }

  bind() {
    const controlElementRules = this.element.querySelector(`.rules__button`);
    const inputGame1 = this.element.querySelector(`.rules__input`);
    const backButton = this.element.querySelector(`.back`);

    controlElementRules.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.nextView(this.game);
    });

    backButton.addEventListener(`click`, () => {
      this.backView();
    });

    inputGame1.addEventListener(`input`, (evt) => {
      evt.preventDefault();
      if (inputGame1.value) {
        controlElementRules.removeAttribute(`disabled`);
      }
    });
  }

  nextView() {

  }

  backView() {

  }
}

export default RulesView;

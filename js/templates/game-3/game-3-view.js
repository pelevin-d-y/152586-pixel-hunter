import AbstractView from '../../view.js';
import {headerTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';
import {bodyTemplate} from '../game-utils.js';

const getGameOption = (answer, index) => `<div class="game__option">
<img src="${answer.url}" alt="Option ${index}" width="304" height="455">
</div>`;

class ViewGame3 extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return headerTemplate(this.game, headerTemplate) + bodyTemplate(this.game.statistics, getGameOption, this.game.gameQuestions.question3, `game__content--triple`) + footerTemplat;
  }

  bind() {
    const controlElementsGame3 = Array.from(this.element.querySelectorAll(`.game__option`));
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.backView();
    });

    controlElementsGame3.forEach((element) => {
      element.addEventListener(`click`, (evt) => {
        const imageSrc = evt.target.children[0].getAttribute(`src`);
        this.nextView(evt, ``, imageSrc);
      });
    });
  }
  nextView() {

  }

  backView() {

  }

}

export default ViewGame3;

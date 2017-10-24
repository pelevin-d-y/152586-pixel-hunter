import AbstractView from '../../view.js';
import {headerTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';
import {bodyTemplate} from '../game-utils.js';

const getGameOption = (answer, index) =>
  `<div class="game__option">
<img src="${answer.url}" alt="Option ${index}" width="705" height="455">
<label class="game__answer  game__answer--photo">
  <input name="question${index}" type="radio" value="photo">
  <span>Фото</span>
</label>
<label class="game__answer  game__answer--wide  game__answer--paint">
  <input name="question${index}" type="radio" value="paint">
  <span>Рисунок</span>
</label>
</div>`;

class ViewGame2 extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return headerTemplate(this.game) + bodyTemplate(this.game.statistics, getGameOption, this.game.gameQuestions.question2, `game__content--wide`) + footerTemplat;
  }

  bind() {
    const controlElementsGame2 = Array.from(this.element.querySelectorAll(`.game__answer`));
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.backView();
    });

    controlElementsGame2.forEach((element) => {
      element.addEventListener(`change`, (evt) => {
        this.nextView(evt, ``, evt.target.value);
      });
    });
  }

  nextView() {

  }

  backView() {

  }

}

export default ViewGame2;

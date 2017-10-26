import AbstractView from '../../view.js';
import {headerTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';
import {bodyTemplate} from '../game-utils.js';

const getGameOption = (answer, index) =>
  `<div class="game__option">
<img src="${answer.url}" alt="Option ${index}" width="468" height="458">
<label class="game__answer game__answer--photo">
  <input data-answer-index="${index}" class="game-1__checkbox" name="question${index}" type="radio" value="photo">
  <span>Фото</span>
</label>
<label class="game__answer game__answer--paint">
  <input data-answer-index="${index}" class="game-1__checkbox" name="question${index}" type="radio" value="paint">
  <span>Рисунок</span>
</label>
</div>`;

class Game1View extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return headerTemplate(this.game) + bodyTemplate(this.game.statistics, getGameOption, this.game.gameQuestions.question1, ``) + footerTemplat;
  }

  bind() {
    const images = Array.from(this.element.querySelectorAll(`.game__option`));
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.backView();
    });

    images.forEach((element) => {
      element.addEventListener(`change`, (evt) => {
        const imageSrc = evt.currentTarget.children[0].getAttribute(`src`);
        this.nextView(evt, evt.target.dataset.answerIndex, imageSrc, evt.target.value);
      });
    });
  }

  userAnswers() {

  }

  nextView() {

  }

  backView() {

  }
}

export default Game1View;

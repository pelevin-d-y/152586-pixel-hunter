import AbstractView from '../../view.js';
import {headerTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';

const getGameOption = (answer, index) => `<div class="game__option">
<img src="${answer.url}" alt="Option ${index}" width="468" height="458">
<label class="game__answer game__answer--photo">
  <input data-answer-index="${index + 1}" class="game-1__checkbox" name="question${index}" type="radio" value="photo">
  <span>Фото</span>
</label>
<label class="game__answer game__answer--paint">
  <input data-answer-index="${index + 1}" class="game-1__checkbox" name="question${index}" type="radio" value="paint">
  <span>Рисунок</span>
</label>
</div>`;

const bodyTemplate = (game) => {
  const content = game.gameQuestions.question1.answers.map((answer, i) => {
    return getGameOption(answer, i + 1);
  }).join(``);

  const statistics = Object.keys(game.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + game.statistics[element] + `"></li>`;
  }).join(``);

  return `<div class="game">
<p class="game__task">${game.gameQuestions.question1.text}</p>
<form class="game__content">
  ${content}
</form>
<div class="stats">
  <ul class="stats">
    ${statistics}
  </ul>
</div>
</div>`;
};


class Game1View extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return headerTemplate(this.game) + bodyTemplate(this.game) + footerTemplat;
  }

  bind() {
    const images = Array.from(this.element.querySelectorAll(`.game__option`));
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.backView();
    });

    images.forEach((element) => {
      element.addEventListener(`change`, (evt) => {
        this.nextView(evt, evt.target.dataset.answerIndex, evt.target.value);

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

import AbstractView from '../../view.js';
import {headerTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';

const getGameOption = (answer) => `<div class="game__option">
<img src="${answer.url}" alt="Option 1" width="304" height="455">
</div>`;

const bodyTemplate = (data) => {
  const content = data.gameQuestions.question3.answers.map((answer) => {
    return getGameOption(answer);
  }).join(``);

  const statistics = Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``);

  return `<div class="game">
<p class="game__task">${data.gameQuestions.question3.text}</p>
<form class="game__content  game__content--triple">
${content}
</form>
<div class="stats">
  <ul class="stats">
    ${statistics}
   </ul>
</div>
</div>`;
};

class ViewGame3 extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return headerTemplate(this.game, headerTemplate) + bodyTemplate(this.game) + footerTemplat;
  }

  bind() {
    this.currentLevel();

    const controlElementsGame3 = Array.from(this.element.querySelectorAll(`.game__option`));
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.backView();
    });

    controlElementsGame3.forEach((element) => {
      element.addEventListener(`click`, (evt) => {

        this.game.srcCurrentImage = evt.target.children[0].getAttribute(`src`);
        this.game.userAnswers[this.game.currentLevel].answer = this.game.srcCurrentImage;
        this.getCurrentState(this.game, this.game.srcCurrentImage);

        if (this.game.lives < 0) {
          this.statsView();
          return;
        }

        if (this.game.currentLevel === this.game.levels[this.game.levels.length - 1]) {
          this.statsView();
          return;
        }

        this.nextView();
      });
    });
  }

  currentLevel() {

  }

  getCurrentState() {

  }

  nextView() {

  }

  backView() {

  }

}

export default ViewGame3;
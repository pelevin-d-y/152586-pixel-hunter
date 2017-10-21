import AbstractView from '../../view.js';
import {headerTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';

const getGameOption = (answer) =>
  `<div class="game__option">
<img src="${answer.url}" alt="Option 1" width="705" height="455">
<label class="game__answer  game__answer--photo">
  <input name="question1" type="radio" value="photo">
  <span>Фото</span>
</label>
<label class="game__answer  game__answer--wide  game__answer--paint">
  <input name="question1" type="radio" value="paint">
  <span>Рисунок</span>
</label>
</div>`;


const bodyTemplate = (game) => {
  const content = game.gameQuestions.question2.answers.map((answer) => {
    return getGameOption(answer);
  }).join(``);

  const statistics = Object.keys(game.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + game.statistics[element] + `"></li>`;
  }).join(``);

  return `<div class="game">
<p class="game__task">${game.gameQuestions.question2.text}</p>
<form class="game__content  game__content--wide">
${content}
</form>
<div class="stats">
<ul class="stats">
  ${statistics}
</ul>
</div>
</div>`;
};

class Game2View extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return headerTemplate(this.game) + bodyTemplate(this.game) + footerTemplat;
  }

  bind() {
    const controlElementsGame2 = Array.from(this.element.querySelectorAll(`.game__answer`));
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.backView();
    });

    controlElementsGame2.forEach((element) => {
      element.addEventListener(`change`, (evt) => {
        //game.userAnswers[currentLevel].answer = evt.target.value;
        //this.getCurrentState(this.game);
        // if (game.lives < 0) {
        //   showWindow(statsTemplate(game));
        //   showIntroTemplate();
        //   return;
        // }

        // if (game.currentLevel === game.levels[game.levels.length - 1]) {
        //   showWindow(statsTemplate(game));
        //   showIntroTemplate();
        //   return;
        // }

        this.nextView();
      });
    });
  }
}

export default Game2View;

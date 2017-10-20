import AbstractView from '../../view.js';
import {headerTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';

const getGameOption = (answer, index) => `<div class="game__option">
<img src="${answer.url}" alt="Option ${index}" width="468" height="458">
<label class="game__answer game__answer--photo">
  <input class="game-1__checkbox" name="question${index}" type="radio" value="photo">
  <span>Фото</span>
</label>
<label class="game__answer game__answer--paint">
  <input class="game-1__checkbox" name="question${index}" type="radio" value="paint">
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
    const controlElementsGame1 = images.map((option) => option.querySelectorAll(`.game-1__checkbox`));
    const backButton = this.element.querySelector(`.back`);

    console.log(this.render());

    backButton.addEventListener(`click`, () => {
      this.backView();
    });

    images.forEach((element) => {
      element.addEventListener(`change`, (evt) => {
        // if (evt.currentTarget === images[0]) {
        //   game.userAnswers[currentLevel].answer1 = evt.target.value;
        // } else {
        //   game.userAnswers[currentLevel].answer2 = evt.target.value;
        // }

        const isChecked = controlElementsGame1.every((checkbox) => checkbox[0].checked || checkbox[1].checked);
        if (isChecked) {
          //getCurrentStateGame1(game);

          if (this.game.lives < 0) {
            //showWindow(statsTemplate(game));
            //showIntroTemplate();
            return;
          }

          if (game.currentLevel === game.levels[game.levels.length - 1]) {
            //showWindow(statsTemplate(game));
            //showIntroTemplate();
            return;
          }
          //showWindow(game2Template(game));
          //showGame3Template(game);
        }
      });
    });
  }

  nextView() {

  }

  backView() {

  }
}

export default Game1View;

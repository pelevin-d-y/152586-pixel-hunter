import AbstractView from '../../view.js';
import {headerBackTemplate} from '../header/header.js';
import footerTemplat from '../footer/footer.js';
import countPoint from '../../count-point.js';

const statsFail = (game) => {
  const statistics = Object.keys(game.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + game.statistics[element] + `"></li>`;
  }).join(``);

  return `<header class="header">
  ${headerBackTemplate}
  </header>
  <div class="result">
  <h1>Поражение!</h1>
  <table class="result__table">
  <tr>
    <td class="result__number">1.</td>
    <td>
      <ul class="stats">
        ${statistics}
      </ul>
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>`;
};

const statsVictory = (game) => {

  const arrayKeysStatistics = Object.keys(game.statistics);
  arrayKeysStatistics.forEach((element, i) => {
    if (game.statistics[element] === `wrong`) {
      game.answerPoints[i] = {};
      game.answerPoints[i].answer = false;
      game.answerPoints[i].speed = game.statistics[element];
    } else {
      game.answerPoints[i] = {};
      game.answerPoints[i].answer = true;
      game.answerPoints[i].speed = game.statistics[element];
    }
  });

  const statistics = Object.keys(game.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + game.statistics[element] + `"></li>`;
  }).join(``);

  const points = (factor, speed) => {
    return game.answerPoints.filter((element) => {
      if (element.speed === speed) {
        return true;
      } else {
        return false;
      }
    }).length * factor;
  };

  return `<header class="header">
${headerBackTemplate}
</header>
<div class="result">
<h1>Победа!</h1>
<table class="result__table">
  <tr>
    <td class="result__number">1.</td>
    <td colspan="2">
      <ul class="stats">
${statistics}
      </ul>
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">${points(100, `correct`)}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${points(50, `fast`)}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${game.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${game.lives * 50}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${points(-50, `slow`)}</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">${countPoint(game.answerPoints, game.lives)}</td>
  </tr>
</table>`;
};


class ViewStats3 extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
    this.answersStatistics(this.game);
  }

  get template() {
    if (this.game.lives < 0) {
      return statsFail(this.game) + footerTemplat;
    }

    if (this.game.lives >= 0) {
      return statsVictory(this.game) + footerTemplat;
    }
    return null;
  }

  bind() {
    // const arrayKeysStatistics = Object.keys(this.game.statistics);
    // arrayKeysStatistics.forEach((element, i) => {
    //   if (this.game.statistics[element] === `wrong`) {
    //     this.game.answerPoints[i] = {};
    //     this.game.answerPoints[i].answer = false;
    //     this.game.answerPoints[i].speed = this.game.statistics[element];
    //   } else {
    //     this.game.answerPoints[i] = {};
    //     this.game.answerPoints[i].answer = true;
    //     this.game.answerPoints[i].speed = this.game.statistics[element];
    //   }
    // });

    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.backView();
    });
  }

  answersStatistics() {

  }
}

export default ViewStats3;

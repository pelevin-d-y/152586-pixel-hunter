import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import footerTemplat from './footer.js';
import {headerBackTemplate} from './header.js';
import countPoint from '../count-point.js';

const statsFail = (data) => `<header class="header">
  ${headerBackTemplate}
  </header>
  <div class="result">
  <h1>Поражение!</h1>
  <table class="result__table">
  <tr>
    <td class="result__number">1.</td>
    <td>
      <ul class="stats">
${
  Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``)
}
      </ul>
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>`;

const statsVictory = (data) => `
<header class="header">
${headerBackTemplate}
</header>
<div class="result">
<h1>Победа!</h1>
<table class="result__table">
  <tr>
    <td class="result__number">1.</td>
    <td colspan="2">
      <ul class="stats">
${
  Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``)
}
      </ul>
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">${data.answerPoints.filter((element) => {
    if (element.answer) {
      return true;
    } else {
      return false;
    }
  }).length * 100}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${data.answerPoints.filter((element) => {
    if (element.speed === `fast`) {
      return true;
    } else {
      return false;
    }
  }).length * 50}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${data.lives * 50}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${data.answerPoints.filter((element) => {
    if (element.speed === `slow`) {
      return true;
    } else {
      return false;
    }
  }).length * -50}</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">${countPoint(data.answerPoints, data.lives)}</td>
  </tr>
</table>`;

const screenTemplate = (data) => `<header class="header">
${headerBackTemplate}
</header>
<div class="result">
<h1>Победа!</h1>
<table class="result__table">
  <tr>
    <td class="result__number">1.</td>
    <td colspan="2">
      <ul class="stats">
${
  Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``)
}
      </ul>
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">900</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">50</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">100</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">-100</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">950</td>
  </tr>
</table>
<table class="result__table">
  <tr>
    <td class="result__number">2.</td>
    <td>
      <ul class="stats">
${
  Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``)
}
      </ul>
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>
<table class="result__table">
  <tr>
    <td class="result__number">3.</td>
    <td colspan="2">
      <ul class="stats">
${
  Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``)
}
      </ul>
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">900</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">100</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">950</td>
  </tr>
</table>
</div>`;

function statsTemplate(game) {
  const arrayKeysStatistics = Object.keys(game.statistics);

  arrayKeysStatistics.forEach((element, i) => {
    if (game.statistics[element] === `wrong`) {
      game.answerPoints[i].answer = false;
      game.answerPoints[i].speed = game.statistics[element];
    } else {
      game.answerPoints[i].answer = true;
      game.answerPoints[i].speed = game.statistics[element];
    }
  });
  console.log(game);

  if (game.lives < 0) {
    return getElementFromTemplate(statsFail(game) + footerTemplat);
  }

  if (game.lives >= 0) {
    return getElementFromTemplate(statsVictory(game) + footerTemplat);
  }
  return getElementFromTemplate(screenTemplate(game) + footerTemplat);
}

const showIntroTemplate = () => {
  const backButton = document.querySelector(`.back`);

  backButton.addEventListener(`click`, () => {
    showWindow(introTemplate);
    showGreetingTemplate();
  });
};

export {statsTemplate, showIntroTemplate};

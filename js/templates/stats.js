import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import footerTemplat from './footer.js';
import {headerBackTemplate} from './header.js';
import countPoint from '../count-point.js';

const statsFail = (data) => {
  const statistics = Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
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

const statsVictory = (data) => {
  const statistics = Object.keys(data.statistics).map((element) => {
    return `<li class="stats__result stats__result--` + data.statistics[element] + `"></li>`;
  }).join(``);

  const points = (factor, speed) => {
    return data.answerPoints.filter((element) => {
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
    <td class="result__total">${points(100)}</td>
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
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${data.lives * 50}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${points(-50, `slow`)}</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">${countPoint(data.answerPoints, data.lives)}</td>
  </tr>
</table>`;
};

function statsTemplate(game) {
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

  if (game.lives < 0) {
    return getElementFromTemplate(statsFail(game) + footerTemplat);
  }

  if (game.lives >= 0) {
    return getElementFromTemplate(statsVictory(game) + footerTemplat);
  }
  return null;
}

const showIntroTemplate = () => {
  const backButton = document.querySelector(`.back`);

  backButton.addEventListener(`click`, () => {
    showWindow(introTemplate);
    showGreetingTemplate();
  });
};

export {statsTemplate, showIntroTemplate};

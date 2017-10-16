import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {introTemplate, showGreetingTemplate} from './intro.js';
import footerTemplat from './footer.js';
import {headerBackTemplate} from './header.js';

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
    return data.statistics[element];
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
    return data.statistics[element];
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
    return data.statistics[element];
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

import showWindow from '../show-window.js';
import getElementFromTemplate from '../utils.js';
import {greetingTemplate, showRulesTemplate} from './greeting.js';

const introTemplate = getElementFromTemplate(`<div id="intro" class="intro">
<h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`);


const showGreetingTemplate = () => {
  const controlElementIntro = document.querySelector(`.intro__asterisk`);

  controlElementIntro.addEventListener(`click`, () => {
    showWindow(greetingTemplate);
    showRulesTemplate();
  });
};

export {introTemplate, showGreetingTemplate};

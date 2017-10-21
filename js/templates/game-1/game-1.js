import showWindow from '../../show-window.js';
import {game2Template, showGame3Template, game2} from '../game-2/game-2.js';
import {introTemplate, showGreetingTemplate} from '../intro/intro.js';
import {getCurrentStateGame1, getCurrentLevel} from '../../current-state.js';
import {statsTemplate, showIntroTemplate} from '../stats/stats.js';
import Game1View from './game-1-view.js';

// const showGame2Template = (game) => {

//   game.currentLevel = getCurrentLevel(game);
//   const currentLevel = game.currentLevel;
//   game.userAnswers[currentLevel] = {};

//   const images = Array.from(document.querySelectorAll(`.game__option`));
//   const controlElementsGame1 = images.map((option) => option.querySelectorAll(`.game-1__checkbox`));

//   const backButton = document.querySelector(`.back`);
//   backButton.addEventListener(`click`, () => {
//     showWindow(introTemplate);
//     showGreetingTemplate();
//   });

//   images.forEach((element) => {
//     element.addEventListener(`change`, (evt) => {
//       if (evt.currentTarget === images[0]) {
//         game.userAnswers[currentLevel].answer1 = evt.target.value;
//       } else {
//         game.userAnswers[currentLevel].answer2 = evt.target.value;
//       }

//       const isChecked = controlElementsGame1.every((checkbox) => checkbox[0].checked || checkbox[1].checked);
//       if (isChecked) {
//         getCurrentStateGame1(game);

//         if (game.lives < 0) {
//           showWindow(statsTemplate(game));
//           showIntroTemplate();
//           return;
//         }

//         if (game.currentLevel === game.levels[game.levels.length - 1]) {
//           showWindow(statsTemplate(game));
//           showIntroTemplate();
//           return;
//         }
//         showWindow(game2Template(game));
//         showGame3Template(game);
//       }
//     });
//   });
// };


const game1 = (game) => {
  const viewGame1 = new Game1View(game);

  viewGame1.currentLevel = () => {
    game.currentLevel = getCurrentLevel(game);
    game.userAnswers[game.currentLevel] = {};
    //console.log(game.currentLevel);
  };

  viewGame1.getCurrentState = () => {
    getCurrentStateGame1(game);
  };

  viewGame1.nextView = () => {
    showWindow(game2(game));
  };

  return viewGame1;
};

const game1Template = 0;

export {game1Template, showGame2Template, game1};

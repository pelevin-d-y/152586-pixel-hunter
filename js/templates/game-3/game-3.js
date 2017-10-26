import {game1} from '../game-1/game-1.js';
import {getCurrentStateAllGame} from '../../current-state.js';
import showWindow from '../../show-window.js';
import ViewGame3 from './game-3-view.js';
import {showStatsScreen, showGameScreen, showBackScreen, initGameLevel} from '../game-utils.js';

class Game3Screen {
  constructor(game) {
    this.view = new ViewGame3(game);
    this.game = game;
  }

  init() {
    showWindow(this.view);

    initGameLevel(this.game);

    // this.view.nextView = (evt, answerIndex, imageSrc, value) => {
    //   this.game.userAnswers[this.game.currentLevel][`answer${answerIndex}Src`] = imageSrc;
    //   this.game.userAnswers[this.game.currentLevel][`answer${answerIndex}Type`] = value;

    //   getCurrentStateAllGame(this.game);

    //   if (this.game.currentLevel === this.game.levels[this.game.levels.length - 1] || this.game.lives < 0) {
    //     showStatsScreen(this.game);
    //     return;
    //   }

    //   showGameScreen(this.game, game3);
    // };
  }
}


// const game3 = (game) => {
//   const viewGame3 = new ViewGame3(game);

//   initGameLevel(game);

//   viewGame3.nextView = (evt, answerIndex, imageSrc, value) => {
//     game.userAnswers[game.currentLevel][`answer${answerIndex}Src`] = imageSrc;
//     game.userAnswers[game.currentLevel][`answer${answerIndex}Type`] = value;

//     getCurrentStateAllGame(game);

//     if (game.currentLevel === game.levels[game.levels.length - 1] || game.lives < 0) {
//       showStatsScreen(game);
//       return;
//     }

//     showGameScreen(game, game1);
//   };

//   viewGame3.backView = () => showBackScreen(game);

//   return viewGame3;
// };

export {game3, Game3Screen};

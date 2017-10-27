import {getCurrentStateAllGame} from '../../current-state.js';
import showWindow from '../../show-window.js';
import ViewGame3 from './game-3-view.js';
import {showStatsScreen, showGameScreen, showBackScreen, initGameLevel} from '../game-utils.js';
import {Game1Screen} from '../game-1/game-1.js';

class Game3Screen {
  constructor(game) {
    this.view = new ViewGame3(game);
    this.game = game;
  }

  init() {
    showWindow(this.view);

    initGameLevel(this.game);

    this.view.nextView = (evt, answerIndex, imageSrc, value) => {
      this.game.userAnswers[this.game.currentLevel][`answer${answerIndex}Src`] = imageSrc;
      this.game.userAnswers[this.game.currentLevel][`answer${answerIndex}Type`] = value;

      getCurrentStateAllGame(this.game);

      if (this.game.currentLevel === this.game.levels[this.game.levels.length - 1] || this.game.lives < 0) {
        showStatsScreen(this.game);
        return;
      }

      showGameScreen(this.game, new Game1Screen(this.game).init());
    };

    this.view.backView = () => showBackScreen(this.game);
  }
}

export {Game3Screen};

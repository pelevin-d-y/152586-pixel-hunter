import showWindow from '../../show-window.js';
import {getCurrentStateAllGame} from '../../current-state.js';
import Game1View from './game-1-view.js';
import Timer from '../../timer.js';
import App from '../../app.js';
import {showGameScreen, initGameLevel} from '../game-utils.js';

class Game1Screen {
  constructor(game) {
    this.view = new Game1View(game);
    this.game = game;
    this.game.timer = new Timer(30);

  }

  init() {
    showWindow(this.view);

    initGameLevel(this.game);

    this.view.nextView = (evt, answerIndex, imageSrc, value) => {
      this.game.userAnswers[this.game.currentLevel][`answer${answerIndex}Src`] = imageSrc;
      this.game.userAnswers[this.game.currentLevel][`answer${answerIndex}Type`] = value;

      const allAnswered = [1, 2].every((aIndex) => this.game.userAnswers[this.game.currentLevel][`answer${aIndex}Type`]);
      if (allAnswered) {
        getCurrentStateAllGame(this.game);

        if (this.game.currentLevel === this.game.levels[this.game.levels.length - 1] || this.game.lives < 0) {
          App.showStatsScreen(this.game);
          return;
        }

        showGameScreen(this.game, App.showGame2Screen(this.game));
      }
    };

    this.view.backView = () => App.showIntroScreen(this.game);
  }
}

export {Game1Screen};

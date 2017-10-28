import showWindow from '../../show-window.js';
import {getCurrentStateAllGame} from '../../current-state.js';
import Game1View from './game-1-view.js';
import App from '../../app.js';
import {initGameLevel} from '../game-utils.js';
import Timer from '../../timer.js';

class Game1Screen {
  constructor(game) {
    this.view = new Game1View(game);
    this.game = game;
  }

  init() {
    initGameLevel(this.game);

    showWindow(this.view);

    if (this.game.timer !== ``) {
      this.game.timer.stop();
    }

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

        App.showGame2Screen(this.game);
      }
    };

    this.view.backView = () => App.showIntroScreen(this.game);

    this.game.timer = new Timer(30, () => {
      this.game.userAnswers[this.game.currentLevel][`answer1Src`] = `imageSrc`;
      this.game.userAnswers[this.game.currentLevel][`answer2Type`] = `value`;

      getCurrentStateAllGame(this.game);

      if (this.game.currentLevel === this.game.levels[this.game.levels.length - 1] || this.game.lives < 0) {
        App.showStatsScreen(this.game);
        return;
      }

      App.showGame2Screen(this.game);
    });

    this.game.timer.onTick = () => {
      this.view.timerUpdate();
    };
  }
}

export {Game1Screen};

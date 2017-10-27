import {getCurrentStateAllGame} from '../../current-state.js';
import showWindow from '../../show-window.js';
import ViewGame2 from './game-2-view.js';
import {showGameScreen, initGameLevel} from '../game-utils.js';
import App from '../../app.js';

class Game2Screen {
  constructor(game) {
    this.view = new ViewGame2(game);
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
        App.showStatsScreen(this.game);
        return;
      }

      showGameScreen(this.game, App.showGame3Screen(this.game));
    };

    this.view.backView = () => App.showIntroScreen(this.game);
  }
}


export {Game2Screen};

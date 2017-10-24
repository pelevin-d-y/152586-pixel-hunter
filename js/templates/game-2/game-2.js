import {getCurrentStateAllGame} from '../../current-state.js';
import ViewGame2 from './game-2-view.js';
import {game3} from '../game-3/game-3.js';
import {showStatsScreen, showGameScreen, showBackScreen, initGameLevel} from '../game-utils.js';

const game2 = (game) => {
  const viewGame2 = new ViewGame2(game);

  initGameLevel(game);

  viewGame2.nextView = (evt, answerIndex, value) => {
    const imageSrc = document.querySelector(`.game__option`).children[0].getAttribute(`src`);

    game.userAnswers[game.currentLevel][`answer${answerIndex}Src`] = imageSrc;
    game.userAnswers[game.currentLevel][`answer${answerIndex}Type`] = value;

    getCurrentStateAllGame(game);

    if (game.currentLevel === game.levels[game.levels.length - 1] || game.lives < 0) {
      showStatsScreen(game);
      return;
    }

    showGameScreen(game, game3);
  };

  viewGame2.backView = () => showBackScreen(game);

  return viewGame2;
};

export {game2};

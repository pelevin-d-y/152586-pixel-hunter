import showWindow from '../../show-window.js';
import IntroView from './intro-view.js';
import {initialState, StartGame} from '../../data/data.js';
import levels from '../../data/data-levels.js';
import App from '../../app.js';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    const game = new StartGame(initialState);
    const keysLevels = Object.keys(levels);

    for (let key of keysLevels) {
      game.statistics[key] = `unknown`;
    }

    showWindow(this.view);

    this.view.nextView = () => {
      App.showGreetingScreen(game);
    };
  }
}

export {IntroScreen};

import {GreetingScreen} from './templates/greeting/greeting.js';
import {RulesScreen} from './templates/rules/rules.js';
import {Game1Screen} from './templates/game-1/game-1.js';
import {Game2Screen} from './templates/game-2/game-2.js';
import {Game3Screen} from './templates/game-3/game-3.js';
import {showStatsScreen, showBackScreen} from './templates/game-utils.js';

const ControllerId = {
  introScreen: `intro`,
  greetingScreen: `greeting`,
  rulesScreen: `rules`,
  game1Screen: `game1`,
  game2Screen: `game2`,
  game3Screen: `game3`,
  statsScreen: `stats`
};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return () => console.log(`sad`); //initialGame;
  }
};

const routes = {
  [ControllerId.introScreen]: (state) => showBackScreen(state),
  [ControllerId.greetingScreen]: (state) => new GreetingScreen(state).init(),
  [ControllerId.rulesScreen]: (state) => new RulesScreen(state).init(),
  [ControllerId.game1Screen]: (state) => new Game1Screen(state).init(),
  [ControllerId.game2Screen]: (state) => new Game2Screen(state).init(),
  [ControllerId.game3Screen]: (state) => new Game3Screen(state).init(),
  [ControllerId.statsScreen]: (state) => showStatsScreen(state)
};

class App {
  static init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = routes[id];
    if (controller) {
      controller(this.game);
    }
  }

  static showIntroScreen(game) {
    this.game = game;
    location.hash = ControllerId.introScreen;
    //showBackScreen(game);
  }

  static showGreetingScreen(game) {
    this.game = game;
    location.hash = ControllerId.greetingScreen;
    //new GreetingScreen(game).init();
  }

  static showRulesScreen(game) {
    new RulesScreen(game).init();
  }

  static showGame1Screen(game) {
    new Game1Screen(game).init();
  }

  static showGame2Screen(game) {
    new Game2Screen(game).init();
  }

  static showGame3Screen(game) {
    new Game3Screen(game).init();
  }

  static showStatsScreen(game) {
    showStatsScreen(game);
  }
}

App.init();

export default App;

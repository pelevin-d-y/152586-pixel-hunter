import {GreetingScreen} from './templates/greeting/greeting.js';
import {RulesScreen} from './templates/rules/rules.js';
import {Game1Screen} from './templates/game-1/game-1.js';
import {Game2Screen} from './templates/game-2/game-2.js';
import {Game3Screen} from './templates/game-3/game-3.js';
import {showStatsScreen, showBackScreen} from './templates/game-utils.js';
import {getCurrentLevel} from './current-state.js';
import {initialState, StartGame} from './data/data.js';

const ControllerId = {
  introScreen: `intro`,
  greetingScreen: `greeting`,
  rulesScreen: `rules`,
  game1Screen: `game1`,
  game2Screen: `game2`,
  game3Screen: `game3`,
  statsScreen: `stats`
};

const stats = {};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (state) => {
  return JSON.parse(state);
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
    if (!this.game) {
      this.game = new StartGame(initialState);
    }
    console.log(this.game.currentLevel);
    console.log(this.game.statistics);

    if (data) {
      loadState(data);
      this.game.lives = loadState(data).lives;
      this.game.time = loadState(data).time;
      this.game.level = loadState(data).level;
      this.game.statistics = loadState(data).statistics;
      this.game.currentLevel = loadState(data).currentLevel;
    }
    if (controller) {
      controller(this.game);
    }
  }

  static showIntroScreen(game) {
    this.game = game;
    location.hash = ControllerId.introScreen;
  }

  static showGreetingScreen(game) {
    this.game = game;
    location.hash = ControllerId.greetingScreen;
  }

  static showRulesScreen(game) {
    this.game = game;
    location.hash = ControllerId.rulesScreen;
  }

  static showGame1Screen(game) {
    this.game = game;
    stats.lives = this.game.lives;
    stats.level = getCurrentLevel(this.game);
    stats.time = this.game.time;
    stats.statistics = this.game.statistics;
    stats.currentLevel = this.game.currentLevel;
    location.hash = `${ControllerId.game1Screen}?${saveState(stats)}`;
    //new Game1Screen(this.game).init();
  }

  static showGame2Screen(game) {
    this.game = game;
    stats.lives = this.game.lives;
    stats.level = getCurrentLevel(this.game);
    stats.time = this.game.time;
    stats.statistics = this.game.statistics;
    stats.currentLevel = this.game.currentLevel;
    location.hash = `${ControllerId.game2Screen}?${saveState(stats)}`;

    //new Game2Screen(this.game).init();
  }

  static showGame3Screen(game) {
    this.game = game;
    stats.lives = this.game.lives;
    stats.level = getCurrentLevel(this.game);
    stats.time = this.game.time;
    stats.statistics = this.game.statistics;
    stats.currentLevel = this.game.currentLevel;
    location.hash = `${ControllerId.game3Screen}?${saveState(stats)}`;

    //new Game3Screen(this.game).init();
  }

  static showStatsScreen(game) {
    this.game = game;
    location.hash = ControllerId.statsScreen;
  }
}

App.init();

export default App;

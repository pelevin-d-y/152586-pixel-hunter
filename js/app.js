import {GreetingScreen} from './templates/greeting/greeting.js';
import {RulesScreen} from './templates/rules/rules.js';
import {showStatsScreen, showBackScreen} from './templates/game-utils.js';
import {Game1Screen} from './templates/game-1/game-1.js';
import {Game2Screen} from './templates/game-2/game-2.js';
import {Game3Screen} from './templates/game-3/game-3.js';

class App {
  static showIntroScreen(game) {
    showBackScreen(game);
  }

  static showGreetingScreen(game) {
    new GreetingScreen(game).init();
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

export default App;

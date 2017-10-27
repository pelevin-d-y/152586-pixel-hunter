import {IntroScreen} from './templates/intro/intro.js';
import showWindow from './show-window.js';

class App {
  static showIntroScreen() {
    new IntroScreen().init();
  }

  static nextView(template) {
    showWindow(template);
  }
}

export default App;

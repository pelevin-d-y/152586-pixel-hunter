import {introScreen} from './templates/intro/intro.js';
import showWindow from './show-window.js';

class App {
  static showIntroScreen() {
    introScreen.init();
  }

  static nextView(template) {
    showWindow(template);
  }
}

export default App;

import showWindow from '../../show-window.js';
import getElementFromTemplate from '../../utils.js';
import footerTemplat from '../footer/footer.js';
import {headerBackTemplate} from '../header/header.js';
import countPoint from '../../count-point.js';
import ViewStats3 from './stats-view.js';
import {intro} from '../intro/intro.js';
import {showBackScreen} from '../game-utils.js';

const stats = (game) => {
  const viewStats3 = new ViewStats3(game);

  viewStats3.backView = () => {
    showBackScreen(game);
  };

  viewStats3.answersStatistics = () => {
  };

  return viewStats3;
};

export {stats};

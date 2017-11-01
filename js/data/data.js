import questions from './data-questions.js';
import levels from './data-levels.js';

const initialState = {
  numberLevels: 10,
  time: 30,
  lives: 3
};

let currentState = initialState;

function StartGame(state) {
  this.name = `pixel hunter`;
  this.attempt = 1;
  this.gameQuestions = questions;
  this.lives = state.lives;
  this.timer = ``;
  this.time = initialState.time;
  this.numberLevels = initialState.numberLevels;
  this.levels = Object.keys(levels);
  this.currentLevel = ``;
  this.userAnswers = {};
  this.answerPoints = [];
  this.statistics = {};
  this.timeAnswer = {
    slowAnswer: `slow`,
    fastAnswer: `fast`,
    normalAnswer: `correct`,
    wrongAnswer: `wrong`
  };
}

export {initialState, StartGame, currentState};

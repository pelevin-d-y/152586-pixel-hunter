import questions from './data-questions.js';
import levels from './data-levels.js';

const initialState = {
  numberLevels: 10,
  time: 30,
  lives: 3
};

let currentState = initialState;

function startGame(state) {
  return {
    name: `pixel hunter`,
    attempt: 1,
    gameQuestions: questions,
    lives: state.lives,
    timer: ``,
    time: initialState.time,
    numberLevels: initialState.numberLevels,
    levels: Object.keys(levels),
    currentLevel: ``,
    userAnswers: {},
    answerPoints: [],
    statistics: {},
    timeAnswer: {
      slowAnswer: `slow`,
      fastAnswer: `fast`,
      normalAnswer: `correct`,
      wrongAnswer: `wrong`
    }
  };
}

export {initialState, startGame, currentState};

import questions from './data-questions.js';

const initialState = {
  numberLevels: 10,
  time: 30,
  lives: 3
};

let currentState = initialState;

let userAnswers = {
  level1: {
    answer1: ``,
    answer2: ``
  }
};

function startGame(state) {
  return {
    name: `pixel hunter`,
    attempt: 1,
    questions: [questions.question1, questions.question2, questions.question3],
    lives: state.lives,
    time: initialState.time,
    statistics: []
  };
}

export {initialState, startGame, userAnswers, currentState};

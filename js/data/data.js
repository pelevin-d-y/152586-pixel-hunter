import questions from './data-questions.js';

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
    questions: [questions.question1, questions.question2, questions.question3],
    lives: state.lives,
    time: initialState.time,
    userAnswers: {
      level1: {
        answer1: ``,
        answer2: ``
      },
      level2: {
        answer: ``
      }
    },
    statistics: []
  };
}

export {initialState, startGame, currentState};

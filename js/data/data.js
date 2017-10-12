import questions from './data-questions.js';

const game = {
  name: `pixel hunter`,
  attempt: 1,
  questions: [questions.question1, questions.question2, questions.question3],
  statistics: []
};

const initialState = {
  numberLevels: 10,
  time: 30,
  lives: 3
};

let currentState = initialState;

let userAnswers = {
  level1: {
    answer1: ``,
    answer2: ``  // далее будут объекты level2, level3...
  }
};

export {initialState, game, userAnswers, currentState};

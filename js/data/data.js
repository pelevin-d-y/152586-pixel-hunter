import questions from './data-questions.js';

const initialState = {
  numberLevels: 10,
  time: 30,
  lives: 3
};

let userAnswers = {
  level1: {
    answer1: ``,
    answer2: ``
  }
};

const game = {
  name: `pixel hunter`,
  attempt: 1,
  questions: [questions.question1, questions.question2, questions.question3],
  statistics: []
};

export {initialState, game, userAnswers};

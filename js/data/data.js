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
    levels: [`level1`, `level2`, `level3`, `level4`, `level5`, `level6`, `level7`, `level8`, `level9`, `level10`],
    currentLevel: ``,
    userAnswers: {
      level1: {
        answer1: ``,
        answer2: ``
      },
      level2: {
        answer: ``
      },
      level3: {
        answer: ``
      },
    },
    statistics: []
  };
}

export {initialState, startGame, currentState};

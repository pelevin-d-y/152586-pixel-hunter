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
    gameQuestions: questions,
    lives: state.lives,
    time: initialState.time,
    numberLevels: initialState.numberLevels,
    levels: [`level1`, `level2`, `level3`, `level4`, `level5`, `level6`, `level7`, `level8`, `level9`, `level10`],
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

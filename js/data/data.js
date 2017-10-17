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
    numberLevels: initialState.numberLevels,
    levels: [`level1`, `level2`, `level3`, `level4`, `level5`, `level6`, `level7`, `level8`, `level9`, `level10`],
    currentLevel: ``,
    userAnswers: {
      level1: {
        answer1: ``,
        answer2: ``,
      },
      level2: {
        answer: ``
      },
      level3: {
        answer: ``
      },
      level4: {
        answer1: ``,
        answer2: ``
      },
      level5: {
        answer: ``
      },
      level6: {
        answer: ``
      },
      level7: {
        answer1: ``,
        answer2: ``
      },
      level8: {
        answer: ``
      },
      level9: {
        answer: ``
      },
      level10: {
        answer1: ``,
        answer2: ``
      }
    },
    answerPoints: [{answer: ``, speed: ``}, {answer: ``, speed: ``}, {answer: ``, speed: ``}, {answer: ``, speed: ``}, {answer: ``, speed: ``}, {answer: ``, speed: ``}, {answer: ``, speed: ``}, {answer: ``, speed: ``}, {answer: ``, speed: ``}, {answer: ``, speed: ``}],
    statistics: {
      level1: `unknown`,
      level2: `unknown`,
      level3: `unknown`,
      level4: `unknown`,
      level5: `unknown`,
      level6: `unknown`,
      level7: `unknown`,
      level8: `unknown`,
      level9: `unknown`,
      level10: `unknown`
    },
    timeAnswer: {
      slowAnswer: `slow`,
      fastAnswer: `fast`,
      normalAnswer: `correct`,
      wrongAnswer: `wrong`
    }
  };
}

export {initialState, startGame, currentState};

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
        answer2: ``
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
    statistics: {
      level1: `<li class="stats__result stats__result--unknown"></li>`,
      level2: `<li class="stats__result stats__result--unknown"></li>`,
      level3: `<li class="stats__result stats__result--unknown"></li>`,
      level4: `<li class="stats__result stats__result--unknown"></li>`,
      level5: `<li class="stats__result stats__result--unknown"></li>`,
      level6: `<li class="stats__result stats__result--unknown"></li>`,
      level7: `<li class="stats__result stats__result--unknown"></li>`,
      level8: `<li class="stats__result stats__result--unknown"></li>`,
      level9: `<li class="stats__result stats__result--unknown"></li>`,
      level10: `<li class="stats__result stats__result--unknown"></li>`
    },
    timeAnswer: {
      slowAnswer: `<li class="stats__result stats__result--slow"><li>`,
      fastAnswer: `<li class="stats__result stats__result--fast"><li>`,
      normalAnswer: `<li class="stats__result stats__result--correct"></li>`,
      wrongAnswer: `<li class="stats__result stats__result--wrong"></li>`
    }
  };
}

export {initialState, startGame, currentState};

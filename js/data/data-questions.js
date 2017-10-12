import answers from './data-answers.js';

const questions = {
  question1: {
    id: 0,
    text: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [answers.answer1, answers.answer4]
  },

  question2: {
    id: 1,
    text: `Угадай, фото или рисунок?`,
    answers: [answers.answer2]
  },

  question3: {
    id: 2,
    text: `Найдите рисунок среди изображений`,
    answers: [answers.answer3, answers.answer5, answers.answer6]
  },
};

export default questions;

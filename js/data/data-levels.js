import answers from './data-answers.js';
import questions from './data-questions.js';

const levels = {
  level1: {
    question: questions.question1
  },

  level2: {
    question: questions.question2.text,
    questionImageUrl: answers.answer2.url,
  },

  level3: {
    question: questions.question3.text,
    questionImageUrl1: answers.answer3.url,
    questionImageUrl2: answers.answer5.url,
    questionImageUrl3: answers.answer6.url,
  },

  level4: {
    question: questions.question1.text,
    questionImageUrl1: answers.answer1.url,
    questionImageUrl2: answers.answer4.url,
  },

  level5: {
    question: questions.question2.text,
    questionImageUrl: answers.answer2.url,
  },

  level6: {
    question: questions.question3.text,
    questionImageUrll: answers.answer3.url,
    questionImageUrl2: answers.answer5.url,
    questionImageUrl3: answers.answer6.url,
  },

  level7: {
    question: questions.question1.text,
    questionImageUrl1: answers.answer1.url,
    questionImageUrl2: answers.answer4.url,
  },

  level8: {
    question: questions.question2.text,
    questionImageUrl: answers.answer2.url,
  },

  level9: {
    question: questions.question3.text,
    questionImageUrll: answers.answer3.url,
    questionImageUrl2: answers.answer5.url,
    questionImageUrl3: answers.answer6.url,
  },

  level10: {
    question: questions.question1.text,
    questionImageUrl1: answers.answer1.url,
    questionImageUrl2: answers.answer4.url,
  }
};

export default levels;


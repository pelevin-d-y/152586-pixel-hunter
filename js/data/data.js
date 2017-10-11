const initialState = {
  numberLevels: 10,
  time: 30,
  lives: 3
};

const games = [`game1`, `game2`, `game3`, `game4`, `game5`, `game6`, `game7`, `game8`, `game9`, `game10`];

const game1 = {
  'question': `Угадайте для каждого изображения фото или рисунок?`,
  'question-2': `Угадай, фото или рисунок?`,
  'question-3': `Найдите рисунок среди изображений`,
  'question-4': `Угадайте для каждого изображения фото или рисунок?`,
  'question-5': `Угадай, фото или рисунок?`,
  'question-6': `Найдите рисунок среди изображений`,
  'question-7': `Угадайте для каждого изображения фото или рисунок?`,
  'question-8': `Угадай, фото или рисунок?`,
  'question-9': `Найдите рисунок среди изображений`,
  'question-10': `Найдите рисунок среди изображений`
};

const question1 = {
  'text': `Угадайте для каждого изображения фото или рисунок?`,
  'answers': [{
    'answer-1': `image`,
    'answer-2': `drawing`
  },
  {
    'answer-1': `image`,
    'answer-2': `drawing`
  }]
};

const question2 = {
  'text': `Угадай, фото или рисунок?`,
  'answers': {
    'answer-1': `image`,
    'answer-2': `drawing`
  }
};

const question3 = {
  'text': `Найдите рисунок среди изображений`,
  'answers': {
    'answer-1': `image1`,
    'answer-2': `image2`,
    'answer-3': `image3`
  }
}

const answer = {
  status: ``,
  link: ``
};

export default initialState;

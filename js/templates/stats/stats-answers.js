const answersPoint = (game) => {
  const arrayKeysStatistics = Object.keys(game.statistics);
  arrayKeysStatistics.forEach((element, i) => {
    if (game.statistics[element] === `wrong`) {
      game.answerPoints[i] = {};
      game.answerPoints[i].answer = false;
      game.answerPoints[i].speed = game.statistics[element];
    } else {
      game.answerPoints[i] = {};
      game.answerPoints[i].answer = true;
      game.answerPoints[i].speed = game.statistics[element];
    }
  });
};

export default answersPoint;

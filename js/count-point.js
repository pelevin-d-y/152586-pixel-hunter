const countPoint = (answersUser, livesUser) => {
  let points = 0;

  if (answersUser.length !== 10) {
    points = -1;
    return points;
  }

  if (livesUser > 3) {
    points = -1;
    return points;
  }

  if (livesUser <= 0) {
    points = -1;
    return points;
  }

  points = livesUser * 50;

  answersUser.forEach((element) => {
    if (element[`answer`]) {
      points = points + 100;

      if (element[`speed`] === `slow`) {
        points = points - 50;
      }

      if (element[`speed`] === `fast`) {
        points = points + 50;
      }
    }
  });
  return points;
};

export default countPoint;

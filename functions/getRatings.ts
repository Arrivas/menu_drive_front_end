export const getRatings = (ratings: any[]) => {
  const oStars = [0];
  const tStars = [0];
  const thStars = [0];
  const fotars = [0];
  const fitars = [0];
  let countRage = 0;
  let countAve = 0;
  ratings.forEach((rate) => {
    if (rate === 1) oStars.push(rate);
    else if (rate === 2) tStars.push(rate);
    else if (rate === 3) thStars.push(rate);
    else if (rate === 4) fotars.push(rate);
    else if (rate === 5) fitars.push(rate);
    countRage =
      fitars.length +
      fotars.length +
      thStars.length +
      tStars.length +
      oStars.length;
    countAve =
      fitars.length * 5 +
      fotars.length * 4 +
      thStars.length * 3 +
      tStars.length * 2 +
      oStars.length * 1;
  });
  return countAve / countRage;
};

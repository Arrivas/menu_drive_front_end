export const getRatings = (ratings: any[]) => {
  const oStars = [];
  const tStars = [];
  const thStars = [];
  const fotars = [];
  const fitars = [];
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

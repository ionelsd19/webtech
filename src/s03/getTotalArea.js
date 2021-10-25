const squareDimensions = [1, 5, 12, 4, 6, 3];

const getTotalArea = (squareDimensions) => {
  return squareDimensions
    .map((l) => l * l)
    .reduce((prev, current) => prev + current, 0);
};

console.log(getTotalArea(squareDimensions));

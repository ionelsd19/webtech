const calculateMean = (array) => {
  const sumOfNumbers = array.reduce((a, b) => a + b, 0);
  return sumOfNumbers / array.length;
};

const numbers = [4, 8, 2, 1];

console.log(calculateMean(numbers));

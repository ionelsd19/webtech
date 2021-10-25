const numbers = [1, 5, 12, 4, 6, 3];

const calculate = (numbers, number) => {
  return numbers.filter((e) => e % number === 0).reduce((p, c) => p + c, 0);
};

console.log(calculate(numbers, 2));

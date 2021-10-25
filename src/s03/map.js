const sampleArray = [1, 2, 3, 4];

const map = (array, transformation) => {
  const result = [];

  for (let element of array) {
    result.push(transformation(element));
  }

  return result;
};

console.log(map(sampleArray, (x) => x * 2));

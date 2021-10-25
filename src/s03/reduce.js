const sampleArray = [1, 2, 3, 4];

const reduce = (array, update, initialValue) => {
  let accumulator = initialValue;

  for (const element of array) {
    accumulator = update(accumulator, element);
  }

  return accumulator;
};

console.log(reduce(sampleArray, (a, e) => a + e, 0));

let sampleString = 'the quick brown fox jumps over the lazy dog';

const getCounts = (text) => {
  const words = text.split(' ');

  const letters = [];
  for (let word of words) {
    for (let letter of word) {
      letters.push(letter);
    }
  }

  const result = {};

  for (let letter of letters) {
    if (letter in result) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  // for (let letter in result) {
  //   result[letter] /= letters.length;
  // }

  return result;
};

console.log(getCounts(sampleString));

const words = ['cat', 'dog', 'wolf', 'cat', 'horse', 'crocodile', 'fox', 'dog'];

let forbiddenWord = 'cat';
let minLength = 3;

const filterWords = (words, forbiddenWord, minLength) => {
  return words.filter(
    (word) => word !== forbiddenWord && word.length >= minLength
  );
};

console.log(filterWords(words, forbiddenWord, minLength));

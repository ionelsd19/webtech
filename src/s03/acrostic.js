const dictionary = ['apple,', 'fox', 'goat'];

const sampleText = `
  green
  on
  apple
  tree
`;

const checkAcrostih = (sampleText, dictionary) => {
  const candidate = sampleText
    .split('\n')
    .filter((e) => e)
    .map((e) => e.trim()[0])
    .join('');
  return dictionary.indexOf(candidate) > -1;
};

console.log(checkAcrostih(sampleText, dictionary));

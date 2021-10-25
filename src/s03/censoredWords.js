const dictionary = ['este', 'poate', 'nu'];

const sampleText = 'javascript este minunat';

const checkAcrostih = (sampleText, dictionary) => {
  let modifiedArray = [];

  const elementsArray = sampleText.split(' ');
  for (let element of elementsArray) {
    let newWord = element;
    if (dictionary.indexOf(element) > -1) {
      let modifiedWordArray = element.split('');
      let modifiedWord = modifiedWordArray
        .map((e, i) => {
          if (i === 0 || i === element.length - 1) {
            return e;
          } else return '*';
        })
        .join('');
      newWord = modifiedWord;
    }
    modifiedArray.push(newWord);
  }

  return modifiedArray.join(' ');
};

console.log(checkAcrostih(sampleText, dictionary));

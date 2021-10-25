const formatString = (s, formatObject) => {
  let modified = s;

  for (let key in formatObject) {
    if (modified.indexOf(key > -1)) {
      modified = modified.replace('{' + key + '}', formatObject[key]);
    }
  }

  return modified;
};

const sampleString = 'un {substantiv} este {adjectiv}';
const sampleFormat = {
  substantiv: 'calut',
  adjectiv: 'dragut'
};

console.log(formatString(sampleString, sampleFormat));

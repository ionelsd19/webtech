function occurences(text, character) {
  // let count = 0;
  // for (let i = 0; i < text.length; i++) {
  //   if (text.charAt(i) === character) {
  //     count++;
  //   }
  // }

  // return count;

  return text.split(character).length - 1;
}

console.log(occurences('sample text', 'e'));

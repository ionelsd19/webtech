let intercalareArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return -1;
  }
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i]);
    array3.push(array2[i]);
  }

  return array3;
};

let array1 = [1, 2, 3, 4];
let array2 = ['a', 'b', 'c', 'd'];

console.log(intercalareArrays(array1, array2).join(', '));

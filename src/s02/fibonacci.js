let fibonacci = (n) => {
  if (n < 2) {
    return 'Ordinul trebuie sa fie minim 2';
  }
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  let array = [];
  array.push(n1, n2);

  nextTerm = n1 + n2;

  while (array.length < n) {
    array.push(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }

  return array;
};

console.log(fibonacci(process.argv[2]));

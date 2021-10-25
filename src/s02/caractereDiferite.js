const checkCharDif = (s1, s2) => {
  if (s1.length !== s2.length) {
    return -1;
  }

  let result = 0;

  s1.split('').forEach((element) => {
    if (!s2.includes(element)) {
      result++;
    }
  });

  return result;
};

console.log(checkCharDif('diferenta', 'aderenta1'));

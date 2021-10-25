let ages = [22, 15, 18, 29, 21, 56, 9, 26, 44, 31, 3, 76, 52, 20];

let filterAgesAbove18 = (ages) => {
  return ages.filter((age) => age >= 18);
};

console.log(filterAgesAbove18(ages));

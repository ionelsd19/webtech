const sortArray = (array, key) => {
  return array.sort((element1, element2) => {
    if (element1[key] < element2[key]) {
      return -1;
    } else if (element1[key] > element2[key]) {
      return 1;
    } else {
      return 0;
    }
  });
};

const laptops = [
  {
    brand: 'Lenovo',
    processor: 'i5',
    ram: 8
  },
  {
    brand: 'HP',
    processor: 'i5',
    ram: 16
  },
  {
    brand: 'Acer',
    processor: 'i5',
    ram: 8
  },
  {
    brand: 'Asus',
    processor: 'i7',
    ram: 32
  }
];

console.log(sortArray(laptops, 'ram'));

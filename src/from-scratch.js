// find
const getUserById = (arr, num) => {
  return arr.find(object => object.id === num)
};

// findIndex
const getIndexOfApple = (arr) => {
  return arr.findIndex(object => object.name === "apple")
};

// reduce
const getSquaredTotal = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + (currentValue * currentValue), 0);
};

// every
const hasOnlyEvenNumbers = (arr) => {
  if (arr <= 0) {
    return false;
  }
  return arr.every(value => value % 2 === 0);
};

// some
const anyGreaterThan10 = (arr) => {
  if (arr <= 0) {
    return false;
  }
  return arr.some(value => value > 10);
};

// Use your judgement to decide which array method to use!
const roundAll = (arr) => {
  return arr.map(num => Math.round(num));
};

const onlyStrings = (arr) => {
  return arr.filter(element => typeof element === 'string');
};

const stringsToLength = (arr) => {
  return arr.map(element => element.length);
};

const totalGreaterThanGiven = (arr, num) => {
  // const sumOfArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // if (sumOfArr > num) {
  //   return true;
  // }
  // return false;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) > num
};

const numberOfLongWords = (arr) => {
  return arr.filter(element => element.length > 4).length;
};

const numberOfCharacters = (str) => {
  const arr = str.split('');
  const freq = {};
  arr.forEach(letter => freq[letter] = (freq[letter] || 0) + 1);
  return freq;
};

const removeJerkFromCompany = (arr) => {
  return arr.splice(arr.findIndex(object => object.personality === 'jerk'), 1);
};

const chosenCoordinates = (arr, num) => {
  return arr.find(value => value[0] + value[1] === num);
};

// Sorting Functions
const sortWords = (arr) => {
  const newArr = [...arr]
  return newArr.sort();
};

const sortNumbers = (arr) => {
  const newArr = [...arr]
  return newArr.sort((a, b) => a - b)
};

const sortNumbersBetter = (arr, descending) => {
  const newArr = [...arr]
  return descending ? newArr.sort((a, b) => b - a) : newArr.sort((a, b) => a - b);
};

const sortUsersByOrder = (arr) => {
  const copyArr = [...arr];
  return copyArr.sort((a, b) => a.order - b.order);
};

const sortUsersByName = (arr) => {
  const copyArr = [...arr];
  return copyArr.sort();
};

module.exports = {
  getUserById,
  getSquaredTotal,
  hasOnlyEvenNumbers,
  getIndexOfApple,
  numberOfCharacters,
  anyGreaterThan10,
  roundAll,
  removeJerkFromCompany,
  onlyStrings,
  chosenCoordinates,
  stringsToLength,
  totalGreaterThanGiven,
  numberOfLongWords,
  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};

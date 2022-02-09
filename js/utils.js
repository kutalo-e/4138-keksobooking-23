
const getRandomInt = (min, max) => {
  const rand = Math.random() * (max - min + 1) + min;
  return Math.abs(Math.round(rand));
};

const getRandomFloat = (min, max, fix) => {
  const randomNum = (Math.random() * (max - min) + min).toFixed(fix);
  return Math.abs(randomNum);
};

const getRandomElement = (arr) => {
  const randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
};

const getRandomArray = (array) => {
  const randomArray = new Array (getRandomInt(1, array.length)).fill(' ').map(() => (getRandomElement(array)));
  const uniqueElementsArray = [...new Set(randomArray)];
  return uniqueElementsArray;
};

export {getRandomInt, getRandomFloat, getRandomElement, getRandomArray};

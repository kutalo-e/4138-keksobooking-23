import { getRandomInt, getRandomFloat, getRandomElement, getRandomArray } from './utils.js';

const SIMILAR_AD_COUNT = 10;
const TITLES = [
  'Невероятно горячее предложение',
  'Бесплатная отмена бронирования',
  'Страховой залог и предоплата не требуется',
  'Лучшее предложение этого месяца',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECK_PERIODS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Кондиционер и сейф для личных вещей',
  'Розетки около кровати',
  'Звукоизоляция во всем помещении',
  'C видом на живописный парк',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

let numberForAvatar = 0;
const getUniqueAvatarSrc = () => {
  for (let index = 1; index <= SIMILAR_AD_COUNT; index++) {
    numberForAvatar += 1;
    if (numberForAvatar < 10) {
      return`img/avatars/user0${numberForAvatar}.png`;
    }
    return`img/avatars/user${numberForAvatar}.png`;
  }
};

const getAdvt = () => {
  const coordX = getRandomFloat(35.65000, 35.70000, 5);
  const coordY = getRandomFloat(139.7000, 139.80000, 5);

  return {
    author: {
      avatar: getUniqueAvatarSrc(),
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${coordX}, ${coordY}`,
      price: getRandomInt(1000, 100000),
      type: getRandomElement(TYPES),
      rooms: getRandomInt(1, 10),
      guests: getRandomInt(1, 20),
      checkin: getRandomElement(CHECK_PERIODS),
      checkout: getRandomElement(CHECK_PERIODS),
      features: getRandomArray(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: coordX,
      lng: coordY,
    },
  };
};

const createArrayOfAdvt = () => new Array(SIMILAR_AD_COUNT).fill(null).map(() => getAdvt());

export { createArrayOfAdvt };

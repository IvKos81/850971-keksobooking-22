import {TITLES, TYPES, CHECKINS, CHECKOUTS, FEATURES, DESCRIPTIONS, PHOTOS, NUMBER_OF_ADVERTS}  from './data.js';
import {getRandomNumber, getRandomCoordinate} from './util.js';

// Функция создания объявления на Кексобукинге

function createAdvert() {
  let randomAvatar = 'img/avatars/user0'+getRandomNumber(0,9)+'.png';
  let randomTitleIndex = getRandomNumber(0, TITLES.length-1);
  let randomPrice = getRandomNumber(100,10000)+' dollars';
  let randomTypeIndex = getRandomNumber(0,TYPES.length-1);
  let randomRooms = getRandomNumber(1,10);
  let randomGuests = getRandomNumber(1,10);
  let randomCheckinIndex = getRandomNumber(0, CHECKINS.length-1);
  let randomCheckoutIndex = getRandomNumber(0, CHECKOUTS.length-1);
  let randomFeature = new Array(getRandomNumber(1,FEATURES.length)).fill(null).map(function(){ return FEATURES[getRandomNumber(0,FEATURES.length-1)]});

  // Функция проверки массива на повторяющиеся значения

  function checkArr(arr) {
    for(let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length; j++){
        if (arr[i] === arr[j]) {
          arr.splice(i,1);
        }
      }
    }
    return arr
  }

  let randomFeatureChecked = checkArr(randomFeature);

  let randomDescriptionIndex = getRandomNumber(0, DESCRIPTIONS.length-1);
  let randomPhotos = new Array(getRandomNumber(1,PHOTOS.length)).fill(null).map(function(){ return PHOTOS[getRandomNumber(0,PHOTOS.length-1)]});
  let randomPhotosChecked = checkArr(randomPhotos);
  let randomLattitude = getRandomCoordinate(35.65000, 35.70000, 5);
  let randomLongitude = getRandomCoordinate(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: randomAvatar},

    offer: {
      title: TITLES[randomTitleIndex],
      address: [randomLattitude, randomLongitude],
      price: randomPrice,
      type: TYPES[randomTypeIndex],
      rooms: randomRooms,
      guests: randomGuests,
      checkin: CHECKINS[randomCheckinIndex],
      checkout: CHECKOUTS[randomCheckoutIndex],
      features: randomFeatureChecked,
      description: DESCRIPTIONS[randomDescriptionIndex],
      photos: randomPhotosChecked},

    location: {
      x: randomLattitude,
      y: randomLongitude}}
}

//Генерация массива объявлений на Кексобукинге

function boardOfAdverts() {
  return new Array(NUMBER_OF_ADVERTS).fill(null).map(() => {return createAdvert()});
}

boardOfAdverts()

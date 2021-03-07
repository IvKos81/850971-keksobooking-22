import {getRandomNumber, getRandomCoordinate, checkArr} from './util.js';

// Вводные данные

const TITLES = ['Роскошный дворец на берегу моря', 'Уютная квартирка на крыше самого высокого небоскреба', 'Затерянный домик в горах', 'Бунгало в непролазных джунглях'];
const TYPES = ['palace','flat','house','bungalow'];
const CHECKINS = ['12:00','13:00','14:00'];
const CHECKOUTS = ['12:00','13:00','14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const DESCRIPTIONS = ['Чистенько и уютненько', 'Вызывающая роскошь', 'Убежище для техногика', 'Логово супергероя', 'Скромно и опрятно', 'Жилище для пилотов в душе', 'Ночной кошмар для аккуратиста'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const NUMBER_OF_ADVERTS = 10;

// Функция создания объявления на Кексобукинге

function createAdvert() {
  let randomAvatar = 'img/avatars/user0'+getRandomNumber(0,9)+'.png';
  let randomTitleIndex = getRandomNumber(0, TITLES.length-1);
  let randomPrice = getRandomNumber(100,10000);
  let randomTypeIndex = getRandomNumber(0,TYPES.length-1);
  let randomRooms = getRandomNumber(1,10);
  let randomGuests = getRandomNumber(1,10);
  let randomCheckinIndex = getRandomNumber(0, CHECKINS.length-1);
  let randomCheckoutIndex = getRandomNumber(0, CHECKOUTS.length-1);
  let randomFeature = new Array(getRandomNumber(1,FEATURES.length)).fill(null).map(function(){ return FEATURES[getRandomNumber(0,FEATURES.length-1)]});
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
      lat: randomLattitude,
      lng: randomLongitude}}
}

//Генерация массива объявлений на Кексобукинге

function boardOfAdverts() {
  return new Array(NUMBER_OF_ADVERTS).fill(null).map(() => {return createAdvert()});
}

// Данные для отрисовки карты

const ADDRESS = document.querySelector('#address');
ADDRESS.setAttribute('readonly', true)
const LAT = 35.681700;
const LNG = 139.75388;

export {boardOfAdverts, ADDRESS, LAT, LNG}


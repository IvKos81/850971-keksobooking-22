//Вспомогательные функции

function getRandomNumber(num1, num2) {
  num1 = Math.ceil(num1);
  num2 = Math.floor(num2);

  if (num1>=0 && num2>0) {
    if ((num1 === num2) || (num1 > num2)) {
      return 'Диапазон задан неверно'
    } else {
      return Math.floor(Math.random() * (num2 - num1)) + num1;
    }
  } else {
    return 'Диапазон содержит отрицательное значение'
  }
}

/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона. */

function getRandomCoordinate(num1, num2, x) {
  if (num1>=0 && num2>0) {
    if ((num1 === num2) || (num1 > num2)) {
      return 'Диапазон задан неверно'
    } else {
      return ((Math.random() * (num2 - num1)) + num1).toFixed(x);
    }
  } else {
    return 'Диапазон содержит отрицательное значение'
  }
}

// Вводные данные

const TITLE = ['Роскошный дворец на берегу моря', 'Уютная квартирка на крыше самого высокого небоскреба', 'Затерянный домик в горах', 'Бунгало в непролазных джунглях'];
const TYPE = ['palace','flat','house','bungalow'];
const CHECKIN = ['12:00','13:00','14:00'];
const CHECKOUT = ['12:00','13:00','14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const DESCRIPTION = ['Чистенько и уютненько', 'Вызывающая роскошь', 'Убежище для техногика', 'Логово супергероя', 'Скромно и опрятно', 'Жилище для пилотов в душе', 'Ночной кошмар для аккуратиста'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const NUMBER_OF_ADVERTS = 10;

// Функция создания объявления на Кексобукинге

function createAdvert() {
  let randomAvatar = 'img/avatars/user0'+getRandomNumber(0,9)+'.png';
  let randomTitleIndex = getRandomNumber(0, TITLE.length-1);
  let randomPrice = getRandomNumber(100,10000)+' dollars';
  let randomTypeIndex = getRandomNumber(0,TYPE.length-1);
  let randomRooms = getRandomNumber(1,10);
  let randomGuests = getRandomNumber(1,10);
  let randomCheckinIndex = getRandomNumber(0, CHECKIN.length-1);
  let randomCheckoutIndex = getRandomNumber(0, CHECKOUT.length-1);
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

  let randomDescriptionIndex = getRandomNumber(0, DESCRIPTION.length-1);
  let randomPhotos = new Array(getRandomNumber(1,PHOTOS.length)).fill(null).map(function(){ return PHOTOS[getRandomNumber(0,PHOTOS.length-1)]});
  let randomPhotosChecked = checkArr(randomPhotos);
  let randomLattitude = getRandomCoordinate(35.65000, 35.70000, 5);
  let randomLongitude = getRandomCoordinate(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: randomAvatar},

    offer: {
      title: TITLE[randomTitleIndex],
      address: [randomLattitude, randomLongitude],
      price: randomPrice,
      type: TYPE[randomTypeIndex],
      rooms: randomRooms,
      guests: randomGuests,
      checkin: CHECKIN[randomCheckinIndex],
      checkout: CHECKOUT[randomCheckoutIndex],
      features: randomFeatureChecked,
      description: DESCRIPTION[randomDescriptionIndex],
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

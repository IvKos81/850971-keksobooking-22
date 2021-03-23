'use strict';

// фильтрация объявлений

//Ссылки на элементы фильтров

const formFilters = document.querySelector('.map__filters');
const housingFilter = document.querySelector('#housing-type');
const priceFilter  = document.querySelector('#housing-price');
const roomsFilter = document.querySelector('#housing-rooms');
const guestsFilter = document.querySelector('#housing-guests');
const featuresFilter = document.querySelector('#housing-features');
const MIN_PRICE = 10000;
const MID_PRICE = 50000;

//функция фильтрации типа помещения

const filterOnHousings = (array) => {
  switch(housingFilter.value) {
    case 'palace' : return array.offer.type === housingFilter.value;
    case 'flat' : return array.offer.type === housingFilter.value;
    case 'house' : return array.offer.type === housingFilter.value;
    case 'bungalow' : return array.offer.type === housingFilter.value;
    case 'any' : return array;
  }
};

//функция фильтрации цены помещения

const filterOnPrices = (array) => {
  switch(priceFilter.value) {
    case 'any': return array.offer.price;
    case 'middle': return array.offer.price > MIN_PRICE && array.offer.price < MID_PRICE;
    case 'low': return array.offer.price < MIN_PRICE;
    case 'high': return array.offer.price > MID_PRICE;
  }
};

//функция фильтрации количества комнат

const filterOnRooms = (array) => {
  switch(roomsFilter.value) {
    case 'any': return array.offer.rooms;
    case '1': return array.offer.rooms === 1;
    case '2': return array.offer.rooms === 2;
    case '3': return array.offer.rooms === 3;
  }
};

//функция фильтрации количества гостей

const filterOnGuests = (array) => {
  switch (guestsFilter.value) {
    case 'any': return array.offer.guests;
    case '2': return array.offer.guests === 2;
    case '1': return array.offer.guests === 1;
    case '0': return array.offer.guests === 0;
  }
};

//функция фильтрации списка удобств

const filterOnFeatures = (array) => {
  const checkedFeatures = Array.from(featuresFilter.querySelectorAll('input:checked'));
  return checkedFeatures.every((input) => {
    return array.offer.features.includes(input.value);
  });
};

// сведение инидивидуальных фильтров в общую функцию, возвращающую суммарную фильтрацию по всем параметрам

const getFilteredData = (array) => {
  const filteredHouse = filterOnHousings(array);
  const filteredPrice = filterOnPrices(array);
  const filteredRooms = filterOnRooms(array);
  const filteredGuests = filterOnGuests(array);
  const filteredFeatures = filterOnFeatures(array);
  return filteredHouse&&filteredPrice&&filteredRooms&&filteredGuests&&filteredFeatures;
};

// функция фильтрации загружаемого массива данных (будет применена в renderAdverts)

const filterOffers = (array) => {
  return array.filter(getFilteredData);
};

// callback-функция обработчиков событий, навешанных на фильтры

const changeFilter = (cb) => {
  housingFilter.addEventListener('change', function(){cb()});
  priceFilter.addEventListener('change', function(){cb()});
  roomsFilter.addEventListener('change', function(){cb()});
  guestsFilter.addEventListener('change', function(){cb()});
  featuresFilter.addEventListener('change', function(){cb()});
};

// очистка формы фильтров

const resetFilters = () => {
  const resetLoadedPins = new Event('change');
  featuresFilter.dispatchEvent(resetLoadedPins);
  formFilters.reset();
};


export {filterOffers, changeFilter, resetFilters};

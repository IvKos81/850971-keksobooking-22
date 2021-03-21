'use strict';

// фильтрация объявлений

//Ссылки на элементы фильтров

const formFilters = document.querySelector('.map__filters');
const housingFilter = document.querySelector('#housing-type');
const priceFilter  = document.querySelector('#housing-price');
const roomsFilter = document.querySelector('#housing-rooms');
const guestsFilter = document.querySelector('#housing-guests');
const featuresFilter = document.querySelector('#housing-features');

//функция фильтрации типа помещения

const setHousingFilter = function(array) {
  switch(housingFilter.value) {
    case 'palace' : return array.offer.type === housingFilter.value;
    case 'flat' : return array.offer.type === housingFilter.value;
    case 'house' : return array.offer.type === housingFilter.value;
    case 'bungalow' : return array.offer.type === housingFilter.value;
    case 'any' : return array;
  }
}

//функция фильтрации цены помещения

const setPriceFilter = function(array) {
  switch(priceFilter.value) {
    case 'any': return array.offer.price;
    case 'middle': return array.offer.price > 10000 && array.offer.price < 50000;
    case 'low': return array.offer.price < 10000;
    case 'high': return array.offer.price > 50000;
  }
}

//функция фильтрации количества комнат

const setRoomsFilter = function(array) {
  switch(roomsFilter.value) {
    case 'any': return array.offer.rooms;
    case '1': return array.offer.rooms === 1;
    case '2': return array.offer.rooms === 2;
    case '3': return array.offer.rooms === 3;
  }
}

//функция фильтрации количества гостей

const setGuestsFilter = function(array) {
  switch (guestsFilter.value) {
    case 'any': return array.offer.guests;
    case '2': return array.offer.guests === 2;
    case '1': return array.offer.guests === 1;
    case '0': return array.offer.guests === 0;
  }
}

//функция фильтрации списка удобств

const setFeaturesFilter = function(array) {
  const checkedFeatures = Array.from(featuresFilter.querySelectorAll('input:checked'));
  return checkedFeatures.every(function (input) {
    return array.offer.features.includes(input.value);
  })
}

// сведение инидивидуальных фильтров в общую функцию, возвращающую суммарную фильтрацию по всем параметрам

const getFilteredData = function(array) {
  const filteredHouse = setHousingFilter(array);
  const filteredPrice = setPriceFilter(array);
  const filteredRooms = setRoomsFilter(array);
  const filteredGuests = setGuestsFilter(array);
  const filteredFeatures = setFeaturesFilter(array)
  return filteredHouse&&filteredPrice&&filteredRooms&&filteredGuests&&filteredFeatures
}

// функция фильтрации загружаемого массива данных (будет применена в renderAdverts)

const filterOffers = function(array) {
  return array.filter(getFilteredData);
}

// callback-функция обработчиков событий, навешанных на фильтры

const changeFilter = function(cb) {
  housingFilter.addEventListener('change', function(){cb()})
  priceFilter.addEventListener('change', function(){cb()})
  roomsFilter.addEventListener('change', function(){cb()})
  guestsFilter.addEventListener('change', function(){cb()})
  featuresFilter.addEventListener('change', function(){cb()})
}

// очистка формы фильтров

const resetFilters = function() {
  const resetLoadedPins = new Event('change');
  featuresFilter.dispatchEvent(resetLoadedPins)
  formFilters.reset()
}


export {filterOffers, changeFilter, resetFilters}

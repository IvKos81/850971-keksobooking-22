// фильтрация объявлений

//Ссылки на элементы фильтров
const housingFilter = document.querySelector('#housing-type');

//функция фильтрации типа помещения

function setHousingFilter(array) {
  switch(housingFilter.value) {
    case 'palace' : return array.offer.type === housingFilter.value;
    case 'flat' : return array.offer.type === housingFilter.value;
    case 'house' : return array.offer.type === housingFilter.value;
    case 'bungalow' : return array.offer.type === housingFilter.value;
    case 'any' : return array;
  }
}

// сведение инидивидуальных фильтров в общую функцию, возвращающую суммарную фильтрацию по всем параметрам

function getFilteredData(array) {
  const filteredHouse = setHousingFilter(array);
  return filteredHouse;
}

// функция фильтрации загружаемого массива данных (будет применена в renderAdverts)

function filterOffers(array) {
  return array.filter(getFilteredData);
}

// callback-функция обработчиков событий, навешанных на фильтры

function changeFilter(cb) {
  housingFilter.addEventListener('change', function() {cb()})
}

export {filterOffers, changeFilter}

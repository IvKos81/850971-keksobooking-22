// Валидация формы

const advertTitle = document.querySelector('#title')
const accomodationType = document.querySelector('#type')
const accomodationPrice = document.querySelector('#price')
const DEFAULT_PRICE = 5000;
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE = 1000000;
const timeIn = document.querySelector('#timein')
const timeOut = document.querySelector('#timeout')
const roomNumber = document.querySelector('#room_number');
const guestCapacity = document.querySelector('#capacity');

// Валидация заголовка

function advertTitleValidation() {
  if (advertTitle.validity.rangeUnderflow) {
    advertTitle.setCustomValidity('Заголовок должен содержать не менее '+MIN_NAME_LENGTH+' символов')
  } else if (advertTitle.validity.rangeOverflow) {
    advertTitle.setCustomValidity('Заголовок должен содержать не более '+MAX_NAME_LENGTH+' символов')
  } else {
    advertTitle.setCustomValidity('')
  }
  advertTitle.reportValidity();
}

// Валидация цены за ночь

function accomodationPriceValidation() {
  if (accomodationType.value === 'bungalow' && accomodationPrice.value > 0) {
    accomodationPrice.setCustomValidity('Минимальная цена не может быть выше 0 рублей');
  }
  else if (accomodationType.value === 'flat' && accomodationPrice.value > 1000) {
    accomodationPrice.setCustomValidity('Минимальная цена не может быть выше 1000 рублей');
  }
  else if (accomodationType.value === 'house' && accomodationPrice.value > 5000) {
    accomodationPrice.setCustomValidity('Минимальная цена не может быть выше 5000 рублей');
  }
  else if (accomodationType.value === 'palace' && accomodationPrice.value > 10000) {
    accomodationPrice.setCustomValidity('Минимальная цена не может быть выше 10000 рублей');
  }
  else if (accomodationPrice.value > MAX_PRICE) {
    accomodationPrice.setCustomValidity('Значение цены не должно превышать 1 000 000 руб.')
  } else {
    accomodationPrice.setCustomValidity('')
  }

  accomodationPrice.reportValidity()
}

// Валидация тип жилья - цена за ночь

function accomodationTypeValidation() {
  switch(accomodationType.value) {
    case 'bungalow' : accomodationPrice.setAttribute('placeholder', '0'); break
    case 'flat' : accomodationPrice.setAttribute('placeholder', '1000'); break
    case 'house' : accomodationPrice.setAttribute('placeholder', '5000'); break
    case 'palace' : accomodationPrice.setAttribute('placeholder', '10000'); break
  }
}

// Валидация время заезда - время выезда

function timeInValidation() {
  switch(timeIn.value) {
    case '12:00' : timeOut.value = '12:00'; break
    case '13:00' : timeOut.value = '13:00'; break
    case '14:00' : timeOut.value = '14:00'; break
  }
}

function timeOutValidation() {
  switch(timeOut.value) {
    case '12:00' : timeIn.value = '12:00'; break
    case '13:00' : timeIn.value = '13:00'; break
    case '14:00' : timeIn.value = '14:00'; break
  }
}

// Валидация количества комнат и количества гостей

function guestRoomAndCapacityValidation() {

  if (roomNumber.value === '100' && guestCapacity.value !== '0' ) {
    guestCapacity.setCustomValidity('Выберите пункт "Не для гостей ')
    //roomNumber.setCustomValidity('Не для гостей')
  }

  else if (roomNumber.value === '3' && guestCapacity.value === '0') {
    guestCapacity.setCustomValidity('Вы можете выбрать не более 3 гостей ')
  }

  else if (roomNumber.value === '2' && (guestCapacity.value > '2' || guestCapacity.value < '1') ) {
    guestCapacity.setCustomValidity('Вы можете выбрать не более 2 гостей')
  }

  else if (roomNumber.value === '1' && guestCapacity.value !== '1') {
    guestCapacity.setCustomValidity('Вы можете выбрать только 1 гостя')
  }

  else {guestCapacity.setCustomValidity('')}

  guestCapacity.reportValidity();

}

// Запуск функции для валидации комнат и гостей "на лету"
guestRoomAndCapacityValidation()

// Валидация при вводе/изменении данных

advertTitle.addEventListener('input', advertTitleValidation);
accomodationType.addEventListener('change', accomodationTypeValidation);
accomodationPrice.addEventListener('input', accomodationPriceValidation);
timeIn.addEventListener('change', timeInValidation);
timeOut.addEventListener('change', timeOutValidation);
roomNumber.addEventListener('change', guestRoomAndCapacityValidation)
guestCapacity.addEventListener('change', guestRoomAndCapacityValidation)

export {accomodationPrice, DEFAULT_PRICE}


// работа с данными формы



import {resetMainMarker } from './map.js';
import {sendData} from './server.js'
import {showGoodSendMessage, showBadSendMessage, resetForm} from './util.js'

// отмена отправки формы по умолчанию и отправка методом Fetch

const adForm = document.querySelector('.ad-form');

adForm.addEventListener('submit', function(evt) {
  evt.preventDefault()

  const formData = new FormData(evt.target);

  sendData (showGoodSendMessage, showBadSendMessage, formData);
});

document.querySelector('.ad-form__reset').addEventListener('click', function(evt){
  evt.preventDefault();
  resetForm();
  resetMainMarker();
})

// Валидация полей формы по заданию module5-task2

const accomodationType = document.querySelector('#type')
const accomodationPrice = document.querySelector('#price')

accomodationPrice.setAttribute('required', 'true');
accomodationPrice.setAttribute('max', '1000000');

accomodationType.addEventListener('change',(evt) => {
  switch(evt.target.value) {
    case 'bungalow' : accomodationPrice.setAttribute('placeholder', '0'); break
    case 'flat' : accomodationPrice.setAttribute('placeholder', '1000'); break
    case 'house' : accomodationPrice.setAttribute('placeholder', '5000'); break
    case 'palace' : accomodationPrice.setAttribute('placeholder', '10000'); break
  }
})

const timeIn = document.querySelector('#timein')
const timeOut = document.querySelector('#timeout')

timeIn.addEventListener('change',(evt) => {
  switch(evt.target.value) {
    case '12:00' : timeOut.value = '12:00'; break
    case '13:00' : timeOut.value = '13:00'; break
    case '14:00' : timeOut.value = '14:00'; break
  }
})

timeOut.addEventListener('change',(evt) => {
  switch(evt.target.value) {
    case '12:00' : timeIn.value = '12:00'; break
    case '13:00' : timeIn.value = '13:00'; break
    case '14:00' : timeIn.value = '14:00'; break
  }
})

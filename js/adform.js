// работа с данными формы

import {resetMainMarker } from './map.js';
import {sendData} from './server.js'
import {showGoodSendMessage, showBadSendMessage, resetForm} from './util.js'
import {accomodationPrice, DEFAULT_PRICE} from './validation.js'

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
  accomodationPrice.placeholder = DEFAULT_PRICE;
  resetMainMarker();
})

'use strict';

// работа с данными формы

import {resetMainMarker} from './map.js';
import {sendDataToServer} from './server.js'
import {showGoodSendMessage, showBadSendMessage, resetForm} from './util.js'
import {resetAvatar} from './avatar.js'
import {accomodationPrice, DEFAULT_PRICE} from './validation.js'
import {resetFilters} from './filter.js'

// отмена отправки формы по умолчанию и отправка методом Fetch

const adForm = document.querySelector('.ad-form');
const adFormReset = document.querySelector('.ad-form__reset')


adForm.addEventListener('submit', function(evt) {
  evt.preventDefault()

  const formData = new FormData(evt.target);
  sendDataToServer (showGoodSendMessage, showBadSendMessage, formData);
});

adFormReset.addEventListener('click', function(evt){
  evt.preventDefault();
  resetForm();
  accomodationPrice.placeholder = DEFAULT_PRICE;
  resetMainMarker();
  resetAvatar();
  resetFilters();
})

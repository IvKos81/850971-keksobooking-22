'use strict';

// работа с данными формы

import {resetMainMarker} from './map.js';
import {sendDataToServer} from './server.js';
import {showGoodSendMessage, showBadSendMessage, resetForm} from './util.js';
import {resetAvatar} from './avatar.js';
import {accomodationPrice, DEFAULT_PRICE} from './validation.js';
import {resetFilters} from './filter.js';


const adForm = document.querySelector('.ad-form');
const adFormReset = document.querySelector('.ad-form__reset');

// отмена отправки формы по умолчанию и отправка методом Fetch

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendDataToServer (showGoodSendMessage, showBadSendMessage, formData);
});

adFormReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  accomodationPrice.placeholder = DEFAULT_PRICE;
  resetMainMarker();
  resetAvatar();
  resetFilters();
});

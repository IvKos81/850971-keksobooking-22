// работа с данными формы

// отмена отправки формы по умолчанию и отправка методом Fetch

import {sendData} from './server.js'
import {showGoodSendMessage, showBadSendMessage} from './util.js'

const adForm = document.querySelector('.ad-form');

adForm.addEventListener('submit', function(evt) {
  evt.preventDefault()

  const formData = new FormData(evt.target);

  sendData (showGoodSendMessage, showBadSendMessage, formData);
});

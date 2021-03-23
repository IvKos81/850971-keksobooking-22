'use strict';

import {ADDRESS, LAT, LNG} from './map.js';

const successMessageTemplate = document.querySelector('#success');
const errorMessageTemplate = document.querySelector('#error');
const mainElement = document.querySelector('main');

//перевод элементов в неактивное состояние

const setInActive = () => {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  document.querySelector('.map__filters').classList.add('map__filters--disabled');
  document.querySelectorAll('fieldset').forEach((evt) => {
    evt.setAttribute('disabled', 'disabled')
  });
  document.querySelectorAll('.map__filter').forEach((evt) => {
    evt.setAttribute('disabled', 'disabled')
  });
};

// Перевод элементов в активное состояние

const setActive = () => {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  document.querySelector('.map__filters').classList.remove('map__filters--disabled');
  document.querySelectorAll('fieldset').forEach((evt) => {
    evt.removeAttribute('disabled')
  });
  document.querySelectorAll('.map__filter').forEach((evt) => {
    evt.removeAttribute('disabled')
  });
}

// создание шаблона сообщений

const createStatusMessage = (template) => {
  const templateStatusMessage = template.content.cloneNode(true);
  mainElement.append(templateStatusMessage);
};


// сообщение об успешной отправке

const showGoodSendMessage = () => {

  createStatusMessage(successMessageTemplate);

  let goodSendMessage = document.querySelector('.success');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      goodSendMessage.remove()
    }
  });

  document.addEventListener('click', () => {
    goodSendMessage.remove()
  });
};

// сообщение об ошибке отправки

const showBadSendMessage = () => {

  createStatusMessage(errorMessageTemplate);

  let badSendMessage = document.querySelector('.error');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      badSendMessage.remove()
    }
  });

  document.addEventListener('click', () => {
    badSendMessage.remove()
  });

  document.querySelector('.error__button').addEventListener('click', () => {
    badSendMessage.remove()
  });

};

// сообщение об ошибке получения данных

const showBadReceiveMessage = () => {

  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Произошла ошибка загрузки данных';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
}

// очистка формы

const resetForm = () => {
  document.querySelector('.ad-form').reset()
  ADDRESS.value = `${LAT}, ${LNG}`;
};

export {setInActive, setActive, showGoodSendMessage, showBadSendMessage, showBadReceiveMessage, resetForm};



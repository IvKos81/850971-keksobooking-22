'use strict';

import {ADDRESS, LAT, LNG} from './data.js'

//Вспомогательные функции

// Функция генерации случайного целого числа

const getRandomNumber = function(num1, num2) {
  num1 = Math.ceil(num1);
  num2 = Math.floor(num2);

  if (num1>=0 && num2>0) {
    if ((num1 === num2) || (num1 > num2)) {
      return 'Диапазон задан неверно'
    } else {
      return Math.floor(Math.random() * (num2 - num1)) + num1;
    }
  } else {
    return 'Диапазон содержит отрицательное значение'
  }
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона.

const getRandomCoordinate = function(num1, num2, x) {
  if (num1>=0 && num2>0) {
    if ((num1 === num2) || (num1 > num2)) {
      return 'Диапазон задан неверно'
    } else {
      return ((Math.random() * (num2 - num1)) + num1).toFixed(x);
    }
  } else {
    return 'Диапазон содержит отрицательное значение'
  }
}

// Функция проверки массива на повторяющиеся значения

const checkDuplicatesInArray =  function(arr) {
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if (arr[i] === arr[j]) {
        arr.splice(i,1);
      }
    }
  }
  return arr
}

//перевод элементов в неактивное состояние

const setInActive = function() {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  document.querySelector('.map__filters').classList.add('map__filters--disabled');
  document.querySelectorAll('fieldset').forEach((evt) => {
    evt.setAttribute('disabled', 'disabled')
  });
  document.querySelectorAll('.map__filter').forEach((evt) => {
    evt.setAttribute('disabled', 'disabled')
  });
}

// Перевод элементов в активное состояние

const setActive = function() {
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

const successMessageTemplate = document.querySelector('#success');

const errorMessageTemplate = document.querySelector('#error');

const mainElement = document.querySelector('main')

const createStatusMessage = function(template) {

  const templateStatusMessage = template.content.cloneNode(true);
  mainElement.append(templateStatusMessage);

}


// сообщение об успешной отправке

const showGoodSendMessage = function() {

  createStatusMessage(successMessageTemplate)

  let goodSendMessage = document.querySelector('.success');

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      goodSendMessage.remove()
    }
  })

  document.addEventListener('click', function() {
    goodSendMessage.remove()
  })
}

// сообщение об ошибке отправки

const showBadSendMessage = function() {

  createStatusMessage(errorMessageTemplate)

  let badSendMessage = document.querySelector('.error');

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      badSendMessage.remove()
    }
  })

  document.addEventListener('click', function() {
    badSendMessage.remove()
  })

  document.querySelector('.error__button').addEventListener('click', function(){
    badSendMessage.remove()
  })

}

// сообщение об ошибке получения данных

const showBadReceiveMessage = function() {

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

const resetForm = function() {
  document.querySelector('.ad-form').reset()
  ADDRESS.value = `${LAT}, ${LNG}`;
}

export {getRandomNumber, getRandomCoordinate, checkDuplicatesInArray, setInActive, setActive, showGoodSendMessage, showBadSendMessage, showBadReceiveMessage, resetForm}



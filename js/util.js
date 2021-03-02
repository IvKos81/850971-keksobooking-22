//Вспомогательные функции

function getRandomNumber(num1, num2) {
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

/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона. */

function getRandomCoordinate(num1, num2, x) {
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

function checkArr(arr) {
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

function setInActive() {
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

function setActive() {
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

function createStatusMessage(template) {
  const templateStatusMessage = template.content.cloneNode(true);

  mainElement.append(templateStatusMessage);

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      templateStatusMessage.remove()
    }
  })
}

function showGoodSendMessage() {
  createStatusMessage(successMessageTemplate)
}

// сообщение об ошибке отправки

function showBadSendMessage() {
  createStatusMessage(errorMessageTemplate)
}

function showBadReceiveMessage() {
  alert('Произошла ошибка загрузки данных')
}

export {getRandomNumber, getRandomCoordinate, checkArr, setInActive, setActive, showGoodSendMessage, showBadSendMessage, showBadReceiveMessage}



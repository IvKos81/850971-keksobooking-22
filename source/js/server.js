'use strict';

const getDataUrl = 'https://22.javascript.pages.academy/keksobooking/data';
const sendDataUrl = 'https://22.javascript.pages.academy/keksobooking';

//Запрос данных с сервера

const getDataFromServer = (onSuccess, onFail) => {
  fetch(getDataUrl)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => {
      onFail();
    });
};

// Отправка данных на сервер

const sendDataToServer = (onSuccess, onFail, body) => {
  fetch(sendDataUrl, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export {getDataFromServer, sendDataToServer};

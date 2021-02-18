// Файл для генерации разметки похожих объявлений на основе данных.

import {boardOfAdverts} from './data.js'

// Поиск в разметке блока отрисовки карты и шаблона

const mapCanvas = document.querySelector('.map__canvas');


const popupTemplate = document.querySelector('#card')

// Запуск функции генерации массива объявлений

const similarAdverts = boardOfAdverts();

// Перебор объектов массива объявлений с присвоением индивидуальных значений на основе шаблона #card, где adv - объект объявления в массиве

similarAdverts.forEach( function(adv) {

  //клонирование дочерных элементов шаблона (Веб-компонент)

  const advertElement = popupTemplate.content.cloneNode(true);

  advertElement.querySelector('.popup__avatar').src = adv.author.avatar;

  advertElement.querySelector('.popup__title').textContent = adv.offer.title;

  advertElement.querySelector('.popup__text--address').textContent = adv.offer.address;

  advertElement.querySelector('.popup__text--price').textContent = adv.offer.price+' ₽/ночь';

  switch(adv.offer.type) {
    case 'flat' : advertElement.querySelector('.popup__type').textContent = 'Квартира'; break
    case 'bungalow' : advertElement.querySelector('.popup__type').textContent = 'Бунгало'; break
    case 'house' : advertElement.querySelector('.popup__type').textContent = 'Дом'; break
    case 'palace' : advertElement.querySelector('.popup__type').textContent = 'Дворец'; break
  }
  let numbOfRooms
  if (adv.offer.rooms !== 1) {
    if (adv.offer.rooms>4) {
      numbOfRooms = 'комнат'
    } else {
      numbOfRooms = 'комнаты'}
  } else {
    numbOfRooms = 'комната'
  }

  advertElement.querySelector('.popup__text--capacity').textContent = adv.offer.rooms+' '+numbOfRooms+' для '+adv.offer.guests+' гостей';

  advertElement.querySelector('.popup__text--time').textContent = 'Заезд после '+adv.offer.checkin+' , выезд до '+adv.offer.checkout;

  advertElement.querySelector('.popup__features').innerHTML = '';
  for (let i=0; i<adv.offer.features.length; i++) {
    advertElement.querySelector('.popup__features').innerHTML += '<li class="popup__feature popup__feature--'+adv.offer.features[i]+'"></li>';
  }

  advertElement.querySelector('.popup__description').textContent = adv.offer.description;

  advertElement.querySelector('.popup__photos').innerHTML = '';
  for (let j=0; j<adv.offer.photos.length; j++) {
    advertElement.querySelector('.popup__photos').innerHTML += '<img src="'+adv.offer.photos[j]+'" class="popup__photo" width="45" height="40" alt="Фотография жилья">'
  }
  // отрисовка объявления в поле карты

  mapCanvas.appendChild(advertElement);
})

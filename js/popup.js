// Файл для генерации разметки похожих объявлений на основе данных.

import {boardOfAdverts} from './data.js'

// Запуск функции генерации массива объявлений

const similarAdverts = boardOfAdverts();

// Функция для создания объявления на основе шаблона

function createAdvertElement(adv) {

  const popupTemplate = document.querySelector('#card')

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
    let featurePict = document.createElement('li');
    featurePict.classList.add('popup__feature');
    featurePict.classList.add(`popup__feature--${adv.offer.features[i]}`);
    advertElement.querySelector('.popup__features').appendChild(featurePict);
  }

  advertElement.querySelector('.popup__description').textContent = adv.offer.description;

  for (let j=0; j<adv.offer.photos.length; j++) {
    let photoPict = advertElement.querySelector('.popup__photo').cloneNode();
    photoPict.setAttribute('src', `${adv.offer.photos[j]}`)
    advertElement.querySelector('.popup__photos').appendChild(photoPict);
  }
  let photoGallery = advertElement.querySelectorAll('.popup__photo');
  advertElement.querySelector('.popup__photos').removeChild(photoGallery[0]);

  return advertElement
}

export {similarAdverts, createAdvertElement}

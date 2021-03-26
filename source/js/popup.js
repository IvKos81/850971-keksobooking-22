'use strict';

// Функция для создания объявления на основе шаблона

const createAdvertElement = (adv) => {

  const popupTemplate = document.querySelector('#card');

  //клонирование дочерных элементов шаблона (Веб-компонент)

  const advertElement = popupTemplate.content.cloneNode(true);

  adv.author.avatar !== undefined ? advertElement.querySelector('.popup__avatar').src = adv.author.avatar : advertElement.querySelector('.popup__avatar').remove();

  adv.offer.title !== undefined ? advertElement.querySelector('.popup__title').textContent = adv.offer.title : advertElement.querySelector('.popup__title').remove();

  adv.offer.address !== undefined ? advertElement.querySelector('.popup__text--address').textContent = adv.offer.address :  advertElement.querySelector('.popup__text--address').remove();

  adv.offer.price !== undefined ? advertElement.querySelector('.popup__text--price').textContent = adv.offer.price+' ₽/ночь' : advertElement.querySelector('.popup__text--price').remove();

  if (adv.offer.type !== undefined) {
    switch (adv.offer.type) {
      case 'flat' : advertElement.querySelector('.popup__type').textContent = 'Квартира'; break
      case 'bungalow' : advertElement.querySelector('.popup__type').textContent = 'Бунгало'; break
      case 'house' : advertElement.querySelector('.popup__type').textContent = 'Дом'; break
      case 'palace' : advertElement.querySelector('.popup__type').textContent = 'Дворец'; break
    }
  } else {
    advertElement.querySelector('.popup__type').remove()
  }

  let numberOfRooms;
  let numberOfGuests;

  switch (adv.offer.rooms) {
    case 1 : numberOfRooms = 'комната'; break;
    case 2 : numberOfRooms = 'комнаты'; break;
    case 3 : numberOfRooms = 'комнаты'; break;
    case 4 : numberOfRooms = 'комнаты'; break;
    default : numberOfRooms = 'комнат';
  }

  switch (adv.offer.guests) {
    case 1 : numberOfGuests = 'гостя'; break;
    default : numberOfGuests = 'гостей';
  }

  adv.offer.rooms !== undefined ? advertElement.querySelector('.popup__text--capacity').textContent = adv.offer.rooms+' '+numberOfRooms+' для '+adv.offer.guests+' '+numberOfGuests : advertElement.querySelector('.popup__text--capacity').remove();

  adv.offer.checkin !== undefined && adv.offer.checkout !== undefined ? advertElement.querySelector('.popup__text--time').textContent = 'Заезд после '+adv.offer.checkin+' , выезд до '+adv.offer.checkout : advertElement.querySelector('.popup__text--time').remove();

  if (adv.offer.features !== undefined) {
    advertElement.querySelector('.popup__features').innerHTML = '';
    for (let i=0; i<adv.offer.features.length; i++) {
      let featurePict = document.createElement('li');
      featurePict.classList.add('popup__feature');
      featurePict.classList.add(`popup__feature--${adv.offer.features[i]}`);
      advertElement.querySelector('.popup__features').appendChild(featurePict);
    }
  } else {
    advertElement.querySelector('.popup__features').remove();
  }

  adv.offer.description !== undefined ? advertElement.querySelector('.popup__description').textContent = adv.offer.description : advertElement.querySelector('.popup__description'). remove();

  if (adv.offer.photos !== undefined) {
    for (let j=0; j<adv.offer.photos.length; j++) {
      let photoPict = advertElement.querySelector('.popup__photo').cloneNode();
      photoPict.setAttribute('src', `${adv.offer.photos[j]}`)
      advertElement.querySelector('.popup__photos').appendChild(photoPict);
    }
    let photoGallery = advertElement.querySelectorAll('.popup__photo');
    advertElement.querySelector('.popup__photos').removeChild(photoGallery[0]);
  } else {
    advertElement.querySelector('.popup__photo').remove();
  }

  return advertElement;
};

export {createAdvertElement};

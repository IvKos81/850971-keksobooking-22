/* global L:readonly */
'use strict';

// создание и отрисовка карты с помощью Leaflet

import {createAdvertElement} from './popup.js';
import {setInActive, setActive} from './util.js';
import {filterOffers} from './filter.js';

//Данные для отрисовки карты

const ADDRESS = document.querySelector('#address');
const LAT = 35.681700;
const LNG = 139.75388;
const LIMIT_OF_ADVERTS = 10;
const MAP_SCALE = 12;
const MAIN_PIN_WIDTH = 52;
const MAIN_PIN_HEIGHT = 52;
const MAIN_PIN_ANCHOR_WIDTH = 26;
const MAIN_PIN_ANCHOR_HEIGHT = 52;
const MARKER_PIN_WIDTH = 40;
const MARKER_PIN_HEIGHT = 40;
const MARKER_PIN_ANCHOR_WIDTH = 20;
const MARKER_PIN_ANCHOR_HEIGHT = 40;

setInActive();

// отрисовка карты

ADDRESS.setAttribute('readonly', true);

const MAP = L.map('map-canvas').on('load', () => {
  ADDRESS.value = `${LAT}, ${LNG}`;
  setActive();
}).setView({
  lat: LAT,
  lng: LNG,
},MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(MAP);

// создание главного маркера

const MAIN_PIN_ICON = L.icon({
  iconUrl:'img/main-pin.svg',
  iconSize:[MAIN_PIN_WIDTH, MAIN_PIN_HEIGHT],
  iconAnchor: [MAIN_PIN_ANCHOR_WIDTH, MAIN_PIN_ANCHOR_HEIGHT],
});

let MAIN_PIN_MARKER = L.marker({
  lat: LAT,
  lng: LNG,
},
{
  draggable: true,
  icon: MAIN_PIN_ICON,
},
);

MAIN_PIN_MARKER.addTo(MAP).bindPopup('Координаты: '+ADDRESS.value);

MAIN_PIN_MARKER.on('move',(evt) => {
  let latlng = evt.target.getLatLng();
  let lat = latlng.lat.toFixed(5);
  let lng = latlng.lng.toFixed(5);
  ADDRESS.value = `${lat}, ${lng}`;
});

// создание слоя для отрисовки маркеров объявлений с сервера

const MARKERS = L.layerGroup().addTo(MAP);

// функция отрисовки маркеров для объявлений с сервера

const renderMarkers = (array) => {

  // при запуске функции происходит удаление слоя маркеров объявлений, потом идет фильтрация массива в соответствии с установленными значениями фильтров, потом идет отрисовка отфильтрованных маркеров

  resetMarkers();

  filterOffers(array).slice(0, LIMIT_OF_ADVERTS).forEach((adv) => {
    const MARKER_PIN_ICON = L.icon({
      iconUrl:'img/pin.svg',
      iconSize:[MARKER_PIN_WIDTH, MARKER_PIN_HEIGHT],
      iconAnchor:[MARKER_PIN_ANCHOR_WIDTH, MARKER_PIN_ANCHOR_HEIGHT],
    });

    const MARKER = L.marker({
      lat: adv.location.lat,
      lng: adv.location.lng,
    },
    {
      icon: MARKER_PIN_ICON,
    },
    );
    MARKER.addTo(MARKERS).bindPopup(createAdvertElement(adv),{keepInView: true});
  });
};

// Функция сброса списка маркеров

const resetMarkers = () => {
  MARKERS.clearLayers();
};

// Функция сброса главного маркера на начальное значение

const resetMainMarker = () => {
  MAIN_PIN_MARKER.setLatLng([LAT, LNG]);
};

export {renderMarkers, resetMainMarker, ADDRESS, LAT, LNG};

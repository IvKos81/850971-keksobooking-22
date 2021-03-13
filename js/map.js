/* eslint-disable no-undef */
import {createAdvertElement} from './popup.js'
import {setInActive, setActive} from './util.js'
import {ADDRESS, LAT, LNG} from './data.js'
import {filterOffers} from './filter.js'

setInActive()

// создание и отрисовка карты с помощью Leaflet

/*Данные для отрисовки карты */

const MAP = L.map('map-canvas').on('load', () => {
  ADDRESS.value = `${LAT}, ${LNG}`;
  setActive();
}).setView({
  lat: LAT,
  lng: LNG,
},12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(MAP);

// создание главного маркера

const MAIN_PIN_ICON = L.icon({
  iconUrl:'img/main-pin.svg',
  iconSize:[52,52],
  iconAnchor: [26,52],
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

MAIN_PIN_MARKER.addTo(MAP).bindPopup('Координаты: '+ADDRESS.value)

MAIN_PIN_MARKER.on('move',(evt) => {
  let latlng = evt.target.getLatLng();
  let lat = latlng.lat.toFixed(5);
  let lng = latlng.lng.toFixed(5);
  ADDRESS.value = `${lat}, ${lng}`;
})

// данные для отрисовки случайных маркеров

const MARKERS = L.layerGroup().addTo(MAP);

//генерация маркеров для случайных объявлений

function renderMarkers(array) {

  // при запуске функции происходит удаление слоя маркеров объявлений, потом идет фильтрация массива в соответствии с установленными значениями фильтров, потом идет отрисовка отфильтрованных маркеров

  resetMarkers()
  filterOffers(array).slice(0,10).forEach((adv) => {
    const MARKER_PIN_ICON = L.icon({
      iconUrl:'img/pin.svg',
      iconSize:[40,40],
      iconAnchor:[20,40],
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
}

/* Сброс списка маркеров*/

function resetMarkers() {
  MARKERS.clearLayers();
}

/* Сброс главного маркера на начальное значение*/


function resetMainMarker() {
  MAIN_PIN_MARKER.setLatLng([LAT, LNG]);
}

export {renderMarkers, resetMainMarker}

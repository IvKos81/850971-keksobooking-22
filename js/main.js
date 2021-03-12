import './data.js'
import './popup.js'
import './map.js'
import './server.js'
import './adform.js'
import './filter.js'

import {getData} from './server.js'
import {renderMarkers} from './map.js'
import {showBadReceiveMessage} from './util.js'
import {changeFilter} from './filter.js'


// запуск загрузки данных с сервера, внутри функции происходит отрисовка маркеров на карте и перерисовка их в соответствии со значениями фильтров

getData(function(array) {
  renderMarkers(array);
  changeFilter(function() {renderMarkers(array)})},showBadReceiveMessage)


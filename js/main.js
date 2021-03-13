/* global _:readonly */

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
import {RERENDER_DELAY} from './data.js'

getData( function(array) {
  renderMarkers(array)
  changeFilter(_.debounce((function() {renderMarkers(array)}), RERENDER_DELAY))
}, showBadReceiveMessage)

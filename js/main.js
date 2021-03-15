import './data.js'
import './popup.js'
import './map.js'
import './server.js'
import './adform.js'
import './validation.js'

import {getData} from './server.js'
import {createMap} from './map.js'
import {showBadReceiveMessage} from './util.js'

getData(createMap, showBadReceiveMessage)

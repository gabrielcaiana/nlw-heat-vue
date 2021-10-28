import { createStore } from 'vuex'

import {authentication} from "./authentication"
import {messages} from "./messages"

export default createStore({
 modules: {
  authentication,
  messages
 }
})
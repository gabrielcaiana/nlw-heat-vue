import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      default: null
    }
  }
})

export default store
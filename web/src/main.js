import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from "./store"

import './sass/global.scss';
import './plugins/icons'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

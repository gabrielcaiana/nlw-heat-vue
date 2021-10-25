import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes"

import "./sass/global.scss"

createApp(App).use(router).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';

import './sass/global.scss';
import './plugins/icons'

createApp(App).use(router, store).mount('#app');

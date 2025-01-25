import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';

// Globalni CSS
import './assets/styles.scss';

const app = createApp(App);
app.use(router)
app.use(createPinia());
app.mount('#app');

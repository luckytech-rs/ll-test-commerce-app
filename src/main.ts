import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './views/App.vue';

// Globalni CSS
import './assets/styles.scss';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');

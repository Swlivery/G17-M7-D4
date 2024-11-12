// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './firebase';

const app = createApp(App);
app.use(router);
app.mount('#app');
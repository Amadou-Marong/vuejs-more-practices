import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './Components/UI/BaseCard.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.mount('#app');

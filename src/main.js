import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import BadgeDirective from 'primevue/badgedirective';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.use(ToastService);
app.directive('badge', BadgeDirective)
app.mount('#app');
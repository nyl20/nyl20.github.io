import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import Timeline from 'primevue/timeline';
import Fieldset from 'primevue/fieldset';
import Chip from 'primevue/chip';
import { Card } from 'primevue';
import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.component('Button', Button);
app.component('Timeline', Timeline);
app.component('Card', Card);
app.component('Fieldset', Fieldset);
app.component('Chip', Chip);

app.use(router)

app.mount('#app')

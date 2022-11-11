import './bootstrap';

import { formatDistance, subDays } from 'date-fns'
import { greeting } from "./Test";
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import ExampleComponent from './components/ExampleComponent.vue';

// alert(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));

// alert(greeting('Shahzad'));

//vue init
createApp({
    components: {
        ExampleComponent
    }
}).mount('#app');

import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import { createApp } from "vue";
import router from '../js/components/router'
import CompaniesIndex from '../js/components/companies/CompaniesIndex'

createApp({
    components: {
        CompaniesIndex
    }
}).use(router).mount('#app')

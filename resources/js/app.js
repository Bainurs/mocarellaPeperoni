require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import {routes, adminRoutes} from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
    // options here
});

import VueGoodTablePlugin from 'vue-good-table';

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
new Vue({
    el: '#pizza',
    router: router,
    render: h => h(App),
});

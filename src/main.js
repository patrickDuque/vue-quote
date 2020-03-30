import Vue from 'vue';
import VueTilt from 'vue-tilt.js';
import VueParticles from 'vue-particles';
import App from './App.vue';

Vue.use(VueTilt);
Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
	render : (h) => h(App)
}).$mount('#app');

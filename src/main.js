import Vue from 'vue'
import App from './App.vue'
import './index.css';
import i18n from './i18n';


Vue.config.productionTip = false

const lang = localStorage.getItem('lang') || 'en';
document.documentElement.lang = lang;
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')

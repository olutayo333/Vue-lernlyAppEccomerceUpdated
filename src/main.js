import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import Vue from 'vue'

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
 //import 'bootstrap-vue/dist/bootstrap-vue.css'
//import BootstrapVue, { IconsPlugin } from 'bootstrap-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
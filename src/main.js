import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customer from './components/Customer.vue'
import Add from './components/Add.vue'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

//设置路由
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Customer },
        { path: '/add', component: Add },
        { path: '/customerdetails/:id', component: CustomerDetails },
        { path: '/edit/:id', component: Edit },
    ],
})

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')

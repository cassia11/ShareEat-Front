import Vue from 'vue'
import Router from 'vue-router'
import Places from '../components/Places.vue'
import Plates from '../components/Plates.vue'
import Register from '../components/Register.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Places',
            component: Places
        },
        {
            path: '/:id/pratos',
            name: 'Plates',
            component: Plates
        },
        {
            path: '/:id/cadastrar',
            name: 'Register',
            component: Register
        }
    ]
})
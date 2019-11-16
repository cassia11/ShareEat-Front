import Vue from 'vue'
import Router from 'vue-router'
import Places from '../components/Places.vue'
import Plates from '../components/Plates.vue'
import Cadastro from '../components/Cadastro.vue'

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
            name: 'Cadastro',
            component: Cadastro
        }
    ]
})
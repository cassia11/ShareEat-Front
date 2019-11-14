import Vue from 'vue'
import Router from 'vue-router'
import Places from '@/components/Places'
import Plates from '@/components/Plates'
import Cadastro from '@/components/Cadastro'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Places',
            component: Places
        },
        {
            path: '/lugares',
            name: 'Places',
            component: Places
        },
        {
            path: '/:id/pratos',
            name: 'Plates',
            component: Plates
        },
        {
            path: '/cadastrar',
            name: 'Cadastro',
            component: Cadastro
        }
    ]
})
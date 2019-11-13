import Vue from 'vue'
import Router from 'vue-router'
import Places from '@/components/Places'
// import Form from '@/components/Form'

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
    ]
})
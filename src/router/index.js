import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Statute from '../views/Statute.vue'
import Competition from '../views/Competition.vue'
import Results from '../views/Results.vue'
import Register from '../views/Register.vue'
import Feedback from '../views/Feedback.vue'
import store from '../store'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/statute',
        name: 'Statute',
        component: Statute
    },
    {
        path: '/register',
        name: 'Registration',
        component: Register,
        beforeEnter: (to, from, next) => {
            if (store.getters.getAccessToken) next('/competition');
            else next();
        }

    },
    {
        path: '/competition',
        name: 'Competition',
        component: Competition,
        beforeEnter: (to, from, next) => {
            if (store.getters.getAccessToken) next();
            else next('/register');
        }
    },
    {
        path: '/feedback/:id',
        name: 'Feedback',
        component: Feedback,
        beforeEnter: (to, from, next) => {
            if (from.name !== 'Competition') next('/');
            else next();
        }
    },
    {
        path: '/results',
        name: 'Results',
        component: Results
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
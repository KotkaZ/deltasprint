import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Competition from '../views/Competition.vue'
import Results from '../views/Results.vue'
import Register from '../views/Register.vue'
import store from '../store'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/register',
        name: 'Registration',
        component: Register
    },
    {
        path: '/competition',
        name: 'Competition',
        component: Competition,
        meta: {
            requiresAuth: true
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.getAccessToken) {
            next();
            return;
        }
        next('Register');
    } else next();

})

export default router
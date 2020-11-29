import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Test from '../views/Test.vue'
import Competition from '../views/Competition.vue'
import Results from '../views/Results.vue'

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
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/competition',
        name: 'Competition',
        component: Competition
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
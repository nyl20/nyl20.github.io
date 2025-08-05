import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../views/ResearchView.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue'),
    },
    {
      path: '/freshcheck',
      name: 'freshcheck',
      component: () => import('../assets/report.pdf'),
    },
    {
      path: '/squashscore',
      name: 'squashscore',
      component: () => import('../views/SquashScoreView.vue'),
    },
    {
      path: '/bcbm-prediction',
      name: 'bcbm-prediction',
      component: () => import('../views/BCBMView.vue'),
    },
    {
      path: '/nof1',
      name: 'nof1',
      component: () => import('../views/Nof1View.vue'),
    },
    {
      path: '/bluetape',
      name: 'bluetape',
      component: () => import('../views/BlueTapeView.vue'),
    },
    {
      path: '/yarnsocial',
      name: 'yarnsocial',
      component: () => import('../views/YarnSocialView.vue'),
    },
  ],
})

export default router

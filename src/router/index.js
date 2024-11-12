// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase';
import HomeView from '../views/Home.vue';
import LoginView from '../views/Login.vue';
import SignUpView from '../views/SignUp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresUnauth: true }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView,
    meta: { requiresUnauth: true }
  }
];

// Crear la instancia del router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Guardia de navegación
router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth);

  if (requiresAuth && !currentUser) {
    next('/signup');
  } else if (requiresUnauth && currentUser) {
    next('/');
  } else {
    next();
  }
});

// Exportar el router
export default router;
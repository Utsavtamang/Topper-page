import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/semester/:semester/:keyword',
      name: 'SemesterContent',
      component: () => import('@/views/SemesterContent.vue'), // Use a single dynamic component
    },
    // Add a fallback route for invalid paths
    {
      path: '*',
      redirect: '/', // Redirect to home or a 404 page
    },
  ],
});
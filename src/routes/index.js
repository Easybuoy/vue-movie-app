import Movies from '@/components/Movies';
import Dashboard from '@/components/Dashboard';

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/movies',
    component: Movies
  }
];

export default routes;

import MoviesContainer from '@/components/MoviesContainer';
import Dashboard from '@/components/Dashboard';

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/movies',
    component: MoviesContainer
  }
];

export default routes;

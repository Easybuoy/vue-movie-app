import MoviesContainer from '@/components/MoviesContainer';
import SeriesContainer from '@/components/SeriesContainer';
import Dashboard from '@/components/Dashboard';

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/movies',
    component: MoviesContainer
  },
  {
    path: '/series',
    component: SeriesContainer
  }
];

export default routes;

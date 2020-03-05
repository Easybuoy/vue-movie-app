import MoviesContainer from '@/components/MoviesContainer';
import MovieDetail from '@/components/MovieDetail';
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
  },
  { path: '/movie/:id', name: 'movies', component: MovieDetail }
];

export default routes;

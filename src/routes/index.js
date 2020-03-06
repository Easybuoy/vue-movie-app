import MoviesContainer from '@/components/Movies/MoviesContainer';
import MovieDetail from '@/components/Movies/MovieDetail';
import SerieDetail from '@/components/Series/SerieDetail';
import SeriesContainer from '@/components/Series/SeriesContainer';
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
  { path: '/movie/:id', name: 'movies', component: MovieDetail },
  { path: '/serie/:id', name: 'series', component: SerieDetail }
];

export default routes;

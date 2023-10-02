import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../../pages/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews'));
const NotFound = lazy(() => import('../../pages/NotFound'));

export const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

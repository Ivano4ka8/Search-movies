import { SearchBox } from 'components/SearchMovies/SearchBox';
import { Container, Section } from 'components/App/App.styled';
import { UseSearchFilm } from 'hooks/UseSearchName';
import { ToastContainer, toast } from 'react-toastify';
import { MovieList } from '../components/SearchMovies/MovieList';
import { NoFilms, NoNameFilm } from 'components/Notifications/Notification';
import { motion } from 'framer-motion';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const { nameOfFilm, updateQueryString, films, error, isLoading } =
    UseSearchFilm();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <main>
        <Section>
          <Container>
            {isLoading && <Loader />}
            {error && toast.error('Something went wront')}
            <SearchBox value={nameOfFilm} onChange={updateQueryString} />
            {films.length === 0 && nameOfFilm && <NoFilms />}
            {films.length > 0 ? <MovieList films={films} /> : <NoNameFilm />}
          </Container>
        </Section>
        <ToastContainer />
      </main>
    </motion.div>
  );
}

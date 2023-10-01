import { SearchBox } from 'components/SearchMovies/SearchBox';
import { Container, Section } from 'components/App/App.styled';
import { UseSearchFilm } from 'hooks/UseSearchName';
import { ToastContainer } from 'react-toastify';
import { SearchMovieList } from 'components/SearchMovies/SearchMovieList';
import { NoFilms, NoNameFilm } from 'components/Notifications/Notification';
import { motion } from 'framer-motion';

export default function Movies() {
  const { nameOfFilm, updateQueryString, films } = UseSearchFilm();
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
            <SearchBox
              value={nameOfFilm}
              onChange={event => updateQueryString(event)}
            />
            {films.length === 0 && nameOfFilm && <NoFilms />}
            {nameOfFilm ? <SearchMovieList films={films} /> : <NoNameFilm />}
          </Container>
        </Section>
        <ToastContainer />
      </main>
    </motion.div>
  );
}

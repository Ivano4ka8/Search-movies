import { MovieList } from 'components/SearchMovies/MovieList';
import { Container, Heading, Section } from 'components/App/App.styled';
import { Loader } from 'components/Loader/Loader';
import { FaArrowUp } from 'react-icons/fa';
import { theme } from 'styles';
import { useSearchTrends } from 'hooks/UseSearchTrends';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';

export default function Home() {
  const { films, error, isLoading } = useSearchTrends();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <main>
        {isLoading && <Loader />}
        {error && toast.error('Something went wrong')}
        <Section>
          <Container>
            <Heading>
              <FaArrowUp color={theme.colors.accent} size="24px" />
              Movie trends
            </Heading>
            {films.length > 0 && <MovieList films={films} />}
          </Container>
        </Section>
        <ToastContainer
          pauseOnFocusLoss={true}
          enableMultiContainer={true}
          limit={1}
        />
      </main>
    </motion.div>
  );
}

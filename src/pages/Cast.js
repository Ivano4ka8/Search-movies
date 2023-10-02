import { UseCastInfo } from 'hooks/UseCastInfo';
import { Container, Heading, Section } from 'components/App/App.styled';
import { CastListEl } from '../components/Cast/CastList';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { motion } from 'framer-motion';

export default function Cast() {
  const { actors, error, isLoading } = UseCastInfo();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeIn', delay: 1 }}
    >
      <Section>
        <Container>
          <Heading>Cast</Heading>
          {error && toast.error('Something went wront!!!')}
          {isLoading && <Loader />}
          {actors.length > 0 && <CastListEl actors={actors} />}
        </Container>
      </Section>
    </motion.div>
  );
}

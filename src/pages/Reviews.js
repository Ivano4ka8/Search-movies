import { ToastContainer, toast } from 'react-toastify';
import { Loader } from '../components/Loader/Loader';
import { ReviewsList } from '../components/Reviews/ReviewsList';
import { UseReview } from 'hooks/UseReviewsInfo';
import { Container, Section } from 'components/App/App.styled';
import { NoReviews } from 'components/Notifications/Notification';
import { motion } from 'framer-motion';

export default function Reviews() {
  const { isLoading, error, reviews } = UseReview();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeIn', delay: 1 }}
    >
      <Section>
        <Container>
          {isLoading && <Loader />}
          {error && toast.error('Something went wrong')}
          {reviews.length > 0 ? (
            <ReviewsList reviews={reviews} />
          ) : (
            <NoReviews />
          )}
          <ToastContainer
            pauseOnFocusLoss={true}
            enableMultiContainer={false}
            limit={1}
            autoClose={8000}
          />
        </Container>
      </Section>
    </motion.div>
  );
}

import { ReviewList } from './ReviewsList.styled';
import { ReviewsItem } from './ReviewItem';
import { Heading } from 'components/App/App.styled';
import { MdOutlineRateReview } from 'react-icons/md';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      <Heading>
        <MdOutlineRateReview />
        Reviews
        <MdOutlineRateReview />
      </Heading>
      <ReviewList>
        {reviews.map(review => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ReviewList>
    </>
  );
};

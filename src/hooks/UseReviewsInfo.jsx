import 'react-toastify/dist/ReactToastify.min.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api';

export const UseReview = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    const getReview = async movieId => {
      try {
        const { results } = await getReviews(movieId, signal);
        setReviews(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getReview(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return { isLoading, error, reviews };
};

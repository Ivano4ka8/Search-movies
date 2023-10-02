import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'api';

export const UseMovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);

    const getDetails = async id => {
      try {
        const details = await getMovieDetails(id, signal);
        setInfo(details);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getDetails(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return {
    isLoading,
    error,
    info,
  };
};

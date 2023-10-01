import { getCastInfo } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const UseCastInfo = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);

    const getCast = async movieId => {
      try {
        const { cast } = await getCastInfo(movieId, signal);
        setActors(cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setIsLoading(true);
      }
    };
    getCast(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);
  return { actors, movieId, error, isLoading };
};

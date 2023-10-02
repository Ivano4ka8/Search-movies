import { useState, useEffect } from 'react';
import { getTrendFilmsOnDay } from 'api';

export const useSearchTrends = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    const getTrendFilms = async () => {
      try {
        const { results } = await getTrendFilmsOnDay(signal);

        setFilms(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getTrendFilms();
    return () => {
      controller.abort();
    };
  }, []);

  return {
    films,
    error,
    isLoading,
  };
};

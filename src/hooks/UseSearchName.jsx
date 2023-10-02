import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api';

export const UseSearchFilm = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameOfFilm = searchParams.get('query') ?? '';
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const controllerRef = useRef();

  useEffect(() => {
    if (!nameOfFilm) {
      return;
    }

    setIsLoading(true);

    const searchFilms = async nameOfFilm => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      controllerRef.current = new AbortController();

      try {
        const { results } = await searchMovies(
          nameOfFilm,
          controllerRef.current.signal
        );

        setFilms(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    searchFilms(nameOfFilm);

    return () => {
      controllerRef.current.abort();
    };
  }, [nameOfFilm]);

  const updateQueryString = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  return { nameOfFilm, updateQueryString, films, error, isLoading };
};

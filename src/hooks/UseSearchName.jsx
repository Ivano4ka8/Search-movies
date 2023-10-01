import { useState, useEffect, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api';
import { toast } from 'react-toastify';

export const UseSearchFilm = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameOfFilm = searchParams.get('query') ?? '';

  const location = useLocation();

  const controllerRef = useRef();

  useEffect(() => {
    if (!nameOfFilm) {
      return;
    }
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
          toast.error('Something went wront');
        }
      }
    };

    searchFilms(nameOfFilm);

    return () => {
      controllerRef.current.abort();
    };
  }, [nameOfFilm, films]);

  const updateQueryString = nameOfFilm => {
    const nextParams = nameOfFilm !== '' ? { query: nameOfFilm } : {};
    setSearchParams(nextParams);
  };

  return { nameOfFilm, updateQueryString, films, location };
};

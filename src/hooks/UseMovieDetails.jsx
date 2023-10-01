import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export const UseMovieDetails = () => {
  const { movieId } = useParams();
  const [poster_path, setPoster] = useState('');
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState('');
  const [release_date, setRelease_date] = useState('');
  const [title, setTitle] = useState('');
  const [vote_average, setAverage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);

    const getDetails = async id => {
      try {
        const {
          poster_path,
          genres,
          overview,
          release_date,
          title,
          vote_average,
        } = await getMovieDetails(id, signal);

        setPoster(imgUrl + poster_path);
        setGenres(genres.map(genre => genre.name));
        setOverview(overview);
        setRelease_date(release_date);
        setTitle(title);
        setAverage(Math.round(vote_average * 10));
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
  }, [movieId, vote_average]);

  return {
    isLoading,
    error,
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    genres,
    location,
  };
};

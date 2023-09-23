import { Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'api';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export default function MovieId() {
  const { movieId } = useParams();
  const [poster_path, setPoster] = useState('');
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState('');
  const [release_date, setRelease_date] = useState('');
  const [title, setTitle] = useState('');
  const [vote_average, setAverage] = useState('');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getDetails = async id => {
      try {
        const {
          genres,
          overview,
          release_date,
          title,
          vote_average,
          poster_path,
        } = await getMovieDetails(id, signal);

        setPoster(imgUrl + poster_path);
        setGenres(genres.map(genre => genre.name));
        setOverview(overview);
        setRelease_date(release_date);
        setTitle(title);
        setAverage(Math.round(vote_average * 10));
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Something went wrong');
        }
      }
    };

    getDetails(movieId, controller);

    return () => {
      controller.abort();
    };
  }, [movieId, location]);

  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      <h1>{title}</h1>
      <img src={poster_path} alt={title}></img>
      <span>{vote_average}</span>
      <p>{genres}</p>
      <p>{overview}</p>
      <p>{release_date}</p>

      <Outlet />
      <Toaster
        position="top-center"
        reverseOrder={true}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </>
  );
}

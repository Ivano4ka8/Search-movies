import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { searchMovies } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBox } from 'components/SearchBox';

export default function Movies() {
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
        const { page, results, total_pages, total_results } =
          await searchMovies(nameOfFilm, controllerRef.current.signal);

        setFilms(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Something went wrong');
        }
      }
    };

    searchFilms(nameOfFilm);

    return () => {
      controllerRef.current.abort();
    };
  }, [nameOfFilm]);

  const updateQueryString = nameOfFilm => {
    console.log(nameOfFilm);
    const nextParams = nameOfFilm !== '' ? { query: nameOfFilm } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchBox
        value={nameOfFilm}
        onChange={event => updateQueryString(event)}
      />

      <ul films={films}>
        {films.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
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
    </div>
  );
}

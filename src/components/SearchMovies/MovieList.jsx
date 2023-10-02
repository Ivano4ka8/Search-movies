import { MovieItems } from './MovieItem';
import { MovieListEl } from './MovieList.styled';

export const MovieList = ({ films }) => {
  return (
    <MovieListEl>
      {films.map(film => (
        <MovieItems key={film.id} film={film} />
      ))}
    </MovieListEl>
  );
};

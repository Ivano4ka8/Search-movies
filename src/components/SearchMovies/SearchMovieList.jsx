import { SearchMovieItem } from './SearchMovieItem';
import { SearchListEl } from './SearchMovieList.styled';

export const SearchMovieList = ({ films }) => {
  return (
    <SearchListEl>
      {films.map(film => (
        <SearchMovieItem key={film.id} film={film} />
      ))}
    </SearchListEl>
  );
};

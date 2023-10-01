import { UseSearchFilm } from 'hooks/UseSearchName';
import { MovieImg, MovieItem, LinkStyled } from './SearchMovieItem.styled';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export const SearchMovieItem = ({
  film: { id, title, backdrop_path, poster_path },
}) => {
  const poster = backdrop_path ? backdrop_path : poster_path;
  const { location } = UseSearchFilm();
  return (
    <MovieItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        <MovieImg src={imgUrl + poster} alt={title} />
        {title}
      </LinkStyled>
    </MovieItem>
  );
};

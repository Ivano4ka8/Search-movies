import { MovieImg, MovieItem, LinkStyled } from './MovieItem.styled';
import { useLocation } from 'react-router-dom';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export const MovieItems = ({
  film: { id, title, backdrop_path, poster_path },
}) => {
  const poster = backdrop_path ? backdrop_path : poster_path;
  const location = useLocation();
  return (
    <MovieItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        <MovieImg src={imgUrl + poster} alt={title} />
        {title}
      </LinkStyled>
    </MovieItem>
  );
};

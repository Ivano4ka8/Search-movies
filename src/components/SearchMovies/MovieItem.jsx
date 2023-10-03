import { MovieImg, MovieItem, LinkStyled } from './MovieItem.styled';
import { useLocation } from 'react-router-dom';
import { BsCardImage } from 'react-icons/bs';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export const MovieItems = ({
  film: { id, title, backdrop_path, poster_path },
}) => {
  const poster = backdrop_path ? backdrop_path : poster_path;
  const location = useLocation();
  return (
    <MovieItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        {poster ? (
          <MovieImg src={imgUrl + poster} alt={title} />
        ) : (
          <BsCardImage size="200px" />
        )}

        {title}
      </LinkStyled>
    </MovieItem>
  );
};

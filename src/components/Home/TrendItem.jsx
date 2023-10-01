import { useLocation } from 'react-router-dom';
import { TrendImg, TrendsItem, LinkStyled } from './TrendItem.styled';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export const TrendItem = ({
  film: { title, id, poster_path, backdrop_path },
}) => {
  const location = useLocation();
  return (
    <TrendsItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        <TrendImg src={imgUrl + backdrop_path} alt="title" />
        {title}
      </LinkStyled>
    </TrendsItem>
  );
};

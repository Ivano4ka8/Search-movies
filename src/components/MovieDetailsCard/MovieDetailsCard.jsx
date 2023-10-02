import {
  Title,
  Poster,
  VoteAverage,
  Text,
  DescriptionWrapper,
} from './MovieDetailsCard.styled';
import 'react-toastify/dist/ReactToastify.css';
const imgUrl = 'https://image.tmdb.org/t/p/original/';

export const MovieDetailsCard = ({
  details: { title, poster_path, vote_average, genres, overview, release_date },
}) => {
  const poster = imgUrl + poster_path;
  const genresName = genres.map(genre => genre.name).join(' ,  ');

  return (
    <>
      <Poster src={poster} alt={title} />
      <DescriptionWrapper>
        <Title>{title}</Title>
        <VoteAverage>
          <b>User score:</b> {Math.round(vote_average * 10)}%
        </VoteAverage>
        <Text>
          <b>Genres:</b> {genresName}
        </Text>
        <Text>{overview}</Text>
        <Text style={{ marginBottom: 0 }}>
          <b>Release date: </b>
          {release_date}
        </Text>
      </DescriptionWrapper>
    </>
  );
};

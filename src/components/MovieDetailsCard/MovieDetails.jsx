import { Loader } from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import {
  Title,
  Poster,
  VoteAverage,
  Text,
  MovieWrapper,
  BackBtn,
  CastBtn,
  ReviewsBtn,
  LinkWrapper,
  DescriptionWrapper,
} from './MovieDetails.styled';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { UseMovieDetails } from 'hooks/UseMovieDetails';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

export default function MovieDetails() {
  const {
    isLoading,
    error,
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    genres,
    location,
  } = UseMovieDetails();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <>
      {isLoading && <Loader />}
      {error && toast.error('Something went wrong')}
      <MovieWrapper>
        <LinkWrapper>
          <Link to={backLinkHref.current}>
            <BackBtn type="button">Back</BackBtn>
          </Link>
          <Link to="cast">
            <CastBtn type="button">Cast</CastBtn>
          </Link>
          <Link to="reviews">
            <ReviewsBtn type="button">Reviews</ReviewsBtn>
          </Link>
        </LinkWrapper>
        <Poster src={poster_path} alt={title}></Poster>
        <DescriptionWrapper>
          <Title>{title}</Title>
          <VoteAverage>
            <b>User score:</b> {vote_average}%
          </VoteAverage>
          <Text>
            <b>Genres:</b> {genres.join(',    ')}
          </Text>
          <Text>{overview}</Text>
          <Text style={{ marginBottom: 0 }}>
            <b>Release date: </b>
            {release_date}
          </Text>
        </DescriptionWrapper>
      </MovieWrapper>
      <ToastContainer />
    </>
  );
}

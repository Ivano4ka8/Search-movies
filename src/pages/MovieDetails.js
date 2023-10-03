import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { Container, Section } from 'components/App/App.styled';
import { Suspense, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { UseMovieDetails } from 'hooks/UseMovieDetails';
import {
  MovieWrapper,
  BackBtn,
  CastBtn,
  ReviewsBtn,
  LinkWrapper,
} from '../components/MovieDetailsCard/MovieDetailsCard.styled';

export default function MovieId() {
  const { isLoading, error, info } = UseMovieDetails();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <main>
      <Section>
        <Container>
          <Link to={backLinkHref.current}>
            <BackBtn type="button">Back</BackBtn>
          </Link>
          <MovieWrapper>
            <LinkWrapper>
              <Link to="cast">
                <CastBtn type="button">Cast</CastBtn>
              </Link>
              <Link to="reviews">
                <ReviewsBtn type="button">Reviews</ReviewsBtn>
              </Link>
            </LinkWrapper>
            {isLoading && <Loader />}
            {error && toast.error('Something went wront')}
            {info && <MovieDetailsCard details={info} />}
          </MovieWrapper>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
      <ToastContainer />
    </main>
  );
}

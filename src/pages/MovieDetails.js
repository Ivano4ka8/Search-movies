import MovieDetails from 'components/MovieDetailsCard/MovieDetails';
import { Container, Section } from 'components/App/App.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export default function MovieId() {
  return (
    <main>
      <Section>
        <Container>
          <MovieDetails />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
}

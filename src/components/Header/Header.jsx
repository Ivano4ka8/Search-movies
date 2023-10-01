import { BiMoviePlay } from 'react-icons/bi';
import { Container } from 'components/App/App.styled';
import { useTheme } from 'styled-components';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';
import { Loader } from 'components/Loader/Loader';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <BiMoviePlay size="45px" color={theme.colors.accent} />
            <LinkWrapper>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

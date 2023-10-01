import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    padding-top: ${({ theme }) => theme.spacing(10)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding-top: ${({ theme }) => theme.spacing(20)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: ${({ theme }) => theme.breakpoints.s};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: ${({ theme }) => theme.breakpoints.m};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: ${({ theme }) => theme.breakpoints.l};
  }
`;
export const Heading = styled.h2`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};

  margin-bottom: 12px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

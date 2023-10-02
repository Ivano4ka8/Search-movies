import styled from 'styled-components';
import { theme } from 'styles';

export const Title = styled.h1`
  margin-bottom: 16px;
`;
export const Poster = styled.img`
  width: 300px;
  height: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 20px;
`;
export const VoteAverage = styled.span`
  margin-bottom: 15px;
`;
export const Text = styled.p`
  margin-bottom: 12px;
`;
export const MovieWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  align-items: flex-start;
  box-shadow: 0px 2px 8px 1px #8b0000;
  border-radius: 20px;
`;

export const BackBtn = styled.button`
  padding: 5px 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: ${theme.colors.accent};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.light};

  transition: all ${theme.animations.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${theme.colors.white};
    color: ${theme.colors.accent};
  }
`;

export const CastBtn = styled(BackBtn)``;
export const ReviewsBtn = styled(BackBtn)``;
export const LinkWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 10px;
`;

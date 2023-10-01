import styled from 'styled-components';
import { theme } from 'styles';

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 20px;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  height: auto;
  box-shadow: 0px 2px 8px 1px #8b0000;
  border-radius: 20px;
  gap: 10px;
  justify-content: center;
  padding: 15px;
`;

export const Author = styled.p``;
export const Content = styled.p`
  font-weight: 500;
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const Date = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const AuthorRating = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
`;
export const UserInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserUrl = styled.a`
  transform: scale(1);
  transition: transform ${theme.animations.cubicBezier};
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

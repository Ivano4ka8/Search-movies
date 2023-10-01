import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendImg = styled.img`
  height: 200px;
  border-radius: 8px;
`;

export const TrendsItem = styled.li`
  flex-basis: calc((100% - 36px) / 4);
  border-radius: 8px;

  box-shadow: 0px 2px 8px 1px ${({ theme }) => theme.colors.accent};
  transition: transform ${({ theme }) => theme.animations.cubicBezier};
  transform: scale(0.9);

  &:hover,
  :focus {
    transform: scale(1);
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 4px;
`;

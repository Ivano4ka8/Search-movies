import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-top: 15px;
`;

export const CastItem = styled.li`
  display: flex;
  min-height: 120px;

  gap: 10px;
  align-items: center;
  padding: 10px;
  flex-basis: calc((100% - 36px) / 4);

  box-shadow: 0px 2px 8px 1px ${({ theme }) => theme.colors.accent};
  box-shadow: 0px 2px 8px 1px #8b0000;
  border-radius: 20px;
  transition: transform ${({ theme }) => theme.animations.cubicBezier};
  transform: scale(0.9);

  &:hover,
  :focus {
    transform: scale(1);
  }
`;

export const CastPhoto = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 20px;
`;

export const Name = styled.p`
  font-weight: 500;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

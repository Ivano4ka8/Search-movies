import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import { theme } from 'styles';

export const SearchWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  outline: none;
  min-width: 300px;
  height: 100%;
  padding: 6px 6px 6px 20px;
  border-radius: 4px;
  border: 3px solid ${theme.colors.accent};
  color: ${theme.colors.accent};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
`;

export const IconSearch = styled(BiSearchAlt)`
  position: absolute;
  top: 10px;
  left: calc(50% - 148px);
`;

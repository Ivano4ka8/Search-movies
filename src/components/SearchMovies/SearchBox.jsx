import { theme } from 'styles';
import { IconSearch, Input, SearchWrapper } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <SearchWrapper>
      <Input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      <span>
        <IconSearch size="20px" color={theme.colors.accent} />
      </span>
    </SearchWrapper>
  );
};

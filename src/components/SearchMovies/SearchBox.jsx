import { theme } from 'styles';
import { IconSearch, Input, SearchWrapper } from './SearchBox.styled';
import { useState } from 'react';

export const SearchBox = ({ value, onChange }) => {
  const [query, setQuery] = useState(value);

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Cannot be empty');
    }
    onChange(query);
  };
  return (
    <SearchWrapper>
      <form onSubmit={ handleSubmit}>
        <Input type="text" value={query} name="query" onChange={handleChange} />
        <span>
          <IconSearch size="20px" color={theme.colors.accent} />
        </span>
      </form>
    </SearchWrapper>
  );
};

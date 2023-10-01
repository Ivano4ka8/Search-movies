import { TrendItem } from './TrendItem';
import { TrendListEl } from './TrendList.styled';

export const TrendList = ({ films }) => {
  return (
    <TrendListEl films={films}>
      {films.map(film => (
        <TrendItem key={film.id} film={film} />
      ))}
    </TrendListEl>
  );
};

import {
  CastList,
  CastItem,
  CastPhoto,
  Description,
  Name,
} from './Cast.styled';
import { BsFillPersonVcardFill } from 'react-icons/bs';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export const CastListEl = ({ actors }) => {
  return (
    <CastList>
      {actors.map(actor => (
        <CastItem key={actor.id}>
          {actor.profile_path ? (
            <CastPhoto src={imgUrl + actor.profile_path} alt={actor.name} />
          ) : (
            <BsFillPersonVcardFill color="#8b0000" size="55px" />
          )}
          <Description>
            <Name>{actor.name}</Name>
            <Name>Role: {actor.character}</Name>
          </Description>
        </CastItem>
      ))}
    </CastList>
  );
};

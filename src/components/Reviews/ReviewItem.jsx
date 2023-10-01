import { formatDate } from 'helpers/FormatData';
import {
  Avatar,
  ReviewItem,
  Author,
  Date,
  AuthorRating,
  UserInfo,
  ReviewInfo,
  UserUrl,
} from './ReviewsList.styled';
import { Text } from './ReviewText';
import { PiUserListFill } from 'react-icons/pi';
import { BsStars, BsCalendarDate } from 'react-icons/bs';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export const ReviewsItem = ({
  review: { author, author_details, content, created_at, id, url },
}) => {
  return (
    <ReviewItem key={id}>
      <UserInfo>
        {author_details.avatar_path ? (
          <UserUrl href={url}>
            <Avatar src={imgUrl + author_details.avatar_path} alt="" />
          </UserUrl>
        ) : (
          <UserUrl href="url">
            <PiUserListFill size="55px" color="#8b0000" />
          </UserUrl>
        )}
        <Author>
          <span style={{ textDecoration: 'none' }}>Author</span>
          <br /> {author}
        </Author>
      </UserInfo>
      <ReviewInfo>
        <AuthorRating>
          <BsStars size="20px" color="#8b0000" />
          {author_details.rating ? author_details.rating + '.0' : '0'}
        </AuthorRating>
        <Text content={content} id={id} />
        <Date>
          <BsCalendarDate size="20px" color="#8b0000" />
          {formatDate(created_at)}
        </Date>
      </ReviewInfo>
    </ReviewItem>
  );
};

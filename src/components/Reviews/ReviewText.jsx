import { useState } from 'react';
import { Content } from './ReviewsList.styled';
import { BiSolidCommentDetail } from 'react-icons/bi';

export const Text = ({ content, id }) => {
  const [expandedComments, setExpandedComments] = useState({});

  const toggleCommentExpansion = commentId => {
    setExpandedComments(prevExpandedComments => ({
      ...prevExpandedComments,
      [commentId]: !prevExpandedComments[commentId],
    }));
  };
  return (
    <Content>
      <BiSolidCommentDetail size="25px" color="#8b0000" />
      <span>
        {content.slice(0, expandedComments[id] ? undefined : 200)}
        {content.length > 200 && (
          <button
            style={{ paddingLeft: '5px', color: '#8b0000' }}
            onClick={() => toggleCommentExpansion(id)}
          >
            {expandedComments[id] ? ' Show less' : ' Show more'}
          </button>
        )}
      </span>
    </Content>
  );
};

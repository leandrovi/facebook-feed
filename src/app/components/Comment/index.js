import React from "react";
import PropTypes from "prop-types";

import { Wrapper, ContentWrapper } from "./styles";

function Comment({ comment }) {
  return (
    <Wrapper>
      <img src={comment.author.avatar} alt="Avatar" />
      <ContentWrapper>
        <p>
          <span>{comment.author.name}</span>
          {comment.content}
        </p>
      </ContentWrapper>
    </Wrapper>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }),
    content: PropTypes.string
  })
};

export default Comment;

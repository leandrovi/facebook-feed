import React from "react";
import PropTypes from "prop-types";

import { Container, Header, Author, Content, CommentsWrapper } from "./styles";

import Comment from "../Comment";

function Post({ post }) {
  return (
    <Container>
      <Header>
        <img src={post.author.avatar} alt="Avatar" />
        <Author>
          <span>{post.author.name}</span>
          <small>{post.date}</small>
        </Author>
      </Header>

      <Content>{post.content}</Content>

      <hr />

      <CommentsWrapper>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </CommentsWrapper>
    </Container>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }),
    date: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
};

export default Post;

import React from "react";

import Header from "../../components/Header";
import PostList from "../../components/PostList";

import { Container } from "./styles";

const Feed = () => (
  <Container>
    <Header />
    <PostList />
  </Container>
);

export default Feed;

import React from "react";

import Header from "./app/components/Header";
import PostList from "./app/components/PostList";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <PostList />
      <GlobalStyle />
    </>
  );
}

export default App;

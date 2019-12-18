import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  background: #fff;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  hr {
    width: 100%;
    height: 1px;
    background: #eeeeee;
    border: none;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Author = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;

  span {
    font-weight: bold;
    margin-bottom: 3px;

    &:hover {
      cursor: pointer;
    }
  }

  small {
    font-size: 11px;
    color: #9a9a9a;
  }
`;

export const Content = styled.p`
  margin: 20px 0 25px;
  line-height: 20px;
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  margin-top: 19px;
`;

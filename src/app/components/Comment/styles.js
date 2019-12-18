import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  padding: 6px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  margin-left: 10px;
  background: #eee;
  padding: 10px 15px;
  font-size: 13px;
  line-height: 20px;
  border-radius: 20px;

  p {
    span {
      font-weight: bold;
      margin-right: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

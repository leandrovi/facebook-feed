import styled from "styled-components";

export const HeaderWapper = styled.header`
  width: 100%;
  height: 64px;
  background: #4a90e2;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  padding: 20px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 121px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;

  &:hover {
    cursor: pointer;
  }

  span {
    font-weight: bold;
    margin-right: 8px;
  }
`;

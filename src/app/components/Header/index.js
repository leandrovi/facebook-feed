import React from "react";

import { HeaderWapper, Nav, ProfileWrapper } from "./styles";

import { MdAccountCircle } from "react-icons/md";

function Header() {
  return (
    <HeaderWapper>
      <Nav>
        <img src="https://i.imgur.com/KDIDiSE.png" alt="Facebook Logo" />

        <ProfileWrapper>
          <span>Meu perfil</span>
          <MdAccountCircle size={20} color="#fff" />
        </ProfileWrapper>
      </Nav>
    </HeaderWapper>
  );
}

export default Header;

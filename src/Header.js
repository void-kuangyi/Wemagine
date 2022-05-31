import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const MenuItem = styled.a`
  margin: 30px;
  font-weight: 600;
  text-decoration: none;
  color: black;
`;
const Menu = styled.div`
  padding: 20px;
  margin-left: 47px;
`;
const StyledHeader = styled.div`
  display: flex;
  padding-left: 70px;
  padding-top: 8px;
  align-item: baseline;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 12px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Header = () => (
  <StyledHeader>
    <img src={logo} width="20%" height="auto" />
    <Menu>
      <MenuItem href="#features">Features</MenuItem>
      <MenuItem href="#prices">Pricing</MenuItem>
      <MenuItem href="#about">About us</MenuItem>
    </Menu>
  </StyledHeader>
);

export default Header;

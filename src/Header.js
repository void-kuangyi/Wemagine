import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const MenuItem = styled.a`
margin: 30px;
font-weight: 600;
`
const Menu = styled.div`
padding: 20px;
margin-left: 47px;
`
const StyledHeader = styled.div`
display: flex;
padding-left: 70px;
padding-top:26px;
align-item: baseline;
`

const Header = () => (
    <StyledHeader>
    <img src={logo} width="10%" height="auto" />
    <Menu>
        <MenuItem>Features</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>About us</MenuItem>
    </Menu>
    </StyledHeader>
)

export default Header;
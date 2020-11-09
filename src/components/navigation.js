import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/fireLogo.png";
import {Burger} from "./burger";


const NavbarStyled = styled(Navbar)`
  background-color: ${({theme}) =>theme.colors.favoriteRed};
  padding: 1em;
`;

const NavLinkStyled= styled(Link)`
   margin-right: 1em;
   color: white;
   &:hover{
    color:white;
    text-decoration: none;
`;

export function Navigation(){
    return <>
        <NavbarStyled  fixed="top" expand="lg">
            <Navbar.Brand>
                <NavLinkStyled id="home_link"  to="/">
                    <img src={logo} alt="" height="75"width="150" />
                </NavLinkStyled>
            </Navbar.Brand>
            <Burger/>
        </NavbarStyled>
        </>
}
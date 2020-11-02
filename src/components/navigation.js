import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";


const NavLinkStyled= styled(Link)`
   color: white;
   text-decoration: none;
   & :hover{
    color:white;
    text-decoration: none;
`;

export function Navigation(){
    return <>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>
                <Link className="navbar-brand" to="/">
                    NOTE
                </Link>
            </Navbar.Brand>
            <NavLinkStyled id="creator"  to="/creator">
                NOTE CREATOR
            </NavLinkStyled>
        </Navbar>
        </>
}
import React from "react";
import styled from "@emotion/styled";
import logo from "../images/logo_note.png"

const StyledNav = styled.div`
    height: 100px;
    background-color: limegreen;
    color: white;
    padding: 0.8em 0;
    position: fixed;
    top: 0;
    z-index: 30;
    width: 100%;
`;

const StyledLinkNav = styled.a`
    color: white;
    text-decoration: none;
    padding: 3em;
    font-size: 2em;
`;
const StyledLogo = styled.img`
    max-height: 100px;
    max-width: 200px;
`;

export function Navigation(){
    return <>
            <StyledNav>
                <StyledLinkNav href="#"><StyledLogo src={logo} alt=""/></StyledLinkNav>
                </StyledNav>
        </>
}
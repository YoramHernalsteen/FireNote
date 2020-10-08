import React from "react";
import styled from "@emotion/styled";

const StyledNav = styled.div`
    height: 64px;
    background-color: #223843;
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

export function Navigation(){
    return <>
            <StyledNav>
                <StyledLinkNav href="#">NOTE</StyledLinkNav>
                </StyledNav>
        </>
}
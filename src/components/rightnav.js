import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom"
const NavLinkStyled= styled(Link)`
   margin-right: 1em;
   color: white;
   &:hover{
    color:white;
    text-decoration: none;
`;
const UlStyled = styled.ul`
   list-style: none;
   display: flex;
   flex-flow: column nowrap;
   background-color: ${({theme}) =>theme.colors.primaryDark};;
   position: fixed;
   transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
   top: 0;
   right: 0;
   height: 100vh;
   width: 300px;
   padding-top: 3.5rem;
   transition: transform 0.3s ease-in-out;
   li{
   padding:18px 10px
   }
`;
export function Rightnav(props){
    const {open, setOpen} = props;
    return <>
        <UlStyled open ={open}>
            <li>
                <NavLinkStyled id="creator"  to="/creator" onClick={()=>setOpen(false)}>
                    NOTE CREATOR
                </NavLinkStyled>
            </li>
            <li>
                <NavLinkStyled id="login"  to="/login" onClick={()=>setOpen(false)}>
                    LOGIN
                </NavLinkStyled>
            </li>
        </UlStyled>


    </>
}
import React, { useState } from "react"
import { Button} from "react-bootstrap"
import { useAuth } from "../contexts/user_context"
import { useHistory} from "react-router-dom"
import styled from "@emotion/styled";

const NavLinkStyled= styled(Button)`
   margin-right: 1em;
   color: ${({theme}) =>theme.colors.favoriteRed};
   background-color: white;
   &:hover{
    color:${({theme}) =>theme.colors.secondaryDark};
    text-decoration: none;
    background-color: white;
    }
`;
export function Logout(props) {
    const{setOpen} = props;
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {

        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
        setOpen(false);
    }

    return (
        <>
                <NavLinkStyled onClick={handleLogout}>
                    LOG OUT
                </NavLinkStyled>
               {error}
        </>
    )
}
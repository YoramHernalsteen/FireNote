import React, { useState } from "react"
import { Button} from "react-bootstrap"
import { useAuth } from "../contexts/user_context"
import { useHistory } from "react-router-dom"

export function Logout() {
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
    }

    return (
        <>
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
               {error}
        </>
    )
}
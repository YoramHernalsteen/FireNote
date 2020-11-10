import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/user_context"
import { Link, useHistory } from "react-router-dom"
import styled from "@emotion/styled";

const StyledH1 = styled.h1`
  margin-top: 5em;

`;
const StyledButton = styled(Button)`
   background-color: ${({theme}) =>theme.colors.secondaryDark};
   color: white;
   &:hover{
    background-color:${({theme}) =>theme.colors.favoriteRed};
    text-decoration: none;
    color: white;
    }
`;
const StyledLink=styled(Link)`
   color: ${({theme}) =>theme.colors.favoriteRed};
   text-decoration: none;
   &:hover{
    color:${({theme}) =>theme.colors.secondaryDark};
    text-decoration: none;
    }
`;
export default function UserLogin() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <>
            <StyledH1></StyledH1>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <StyledButton disabled={loading} className="w-100" type="submit">
                            Log In
                        </StyledButton>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <StyledLink to="/signup">Sign Up</StyledLink>
            </div>
        </>
    )
}
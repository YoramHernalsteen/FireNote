import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useUserNameContext} from "../contexts/username_context";
import {useHistory} from "react-router-dom";
import styled from "@emotion/styled";

const StyledH1 = styled.h1`
  margin-top: 5em;

`;
export function Login(){
    let history = useHistory();
    const {userName,setUserName} = useUserNameContext();
    console.log(userName + " :username")
    function handleSubmit(e){
        localStorage.setItem("user", userName);
        history.push("/");
    }
    return <>
        <StyledH1>LOGIN: </StyledH1>
        {userName !== null? <p>You are now logged in as {userName}!</p> : <p>Log in to use the application!</p>}
        <p>You can always change your display name here.</p>
        <Form onSubmit={handleSubmit}>
            <UserNameForm setUser={setUserName}/>
            <Button id="submit" variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    </>
}

function UserNameForm(props){
    const {setUser} = props;
    function handleNameChance(e){
        setUser(e.target.value);
    }
    return <>
        <Form.Group>
            <Form.Label>
                Name:
            </Form.Label>
            <Form.Control type="text" placeholder="Title" id="userform_name" name="userform_name" onChange={handleNameChance}>
            </Form.Control>
        </Form.Group>
        </>
}
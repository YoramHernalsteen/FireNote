import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useUserNameContext} from "../context";
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
        <Form onSubmit={handleSubmit}>
            <UserNameForm setUser={setUserName}/>
            <Button id="submit" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <p>my name is {userName}</p>
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
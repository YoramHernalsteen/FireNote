import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useUserNameContext} from "../context";
import {useHistory} from "react-router-dom";


export function Login(){
    let history = useHistory();
    const {userName,setUserName} = useUserNameContext();
    console.log(userName + " :username")
    function handleSubmit(e){
        e.preventDefault();
        history.push("/creator");
    }
    return <>
        <h1>LOGIN: </h1>
        <Form>
            <UserNameForm setUser={setUserName}/>
            <Button id="submit" variant="primary" type="submit" onSubmit={handleSubmit}>
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
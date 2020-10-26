import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    // state variables 'username' and 'password' will be fed information from the form input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(username,password);
        fetch("http://localhost:3000/user/register", {
          method: 'POST',
          body: JSON.stringify({user:{username: username, password: password}}), 
          headers: new Headers({
              'Content-Type': 'application/json'
          })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        });
    };
    return(
        <div>
            <h1>Sign Up</h1>
            {/* onSubmit handler will listen to and respond to a 'submit' event with our handleSubmit callback. 
            We don't use parentheses within the curly braces, because we aren't calling the callback functions ourselves--that's handled by the onSubmit handler.*/}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* Input fields are tied the state variables*/}
                    {/* TODO: Make username required and return message indicating such */}
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type = "submit">Signup</Button>
            </Form>
        </div>
    );
};

export default Signup;
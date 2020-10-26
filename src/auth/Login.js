import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
    // state variables 'username' and 'password' will be fed information from the form input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <h1>Login</h1>
            <Form>
                <FormGroup>
                    {/* Input fields are tied the state variables, which currently never change, their text content will be static as well (in this case it will be empty). */}
                    <Label htmlFor="username">Username</Label>
                    <Input name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" value={password}/>
                </FormGroup>
                <Button type = "submit">Login</Button>
            </Form>
        </div>
    );
};

export default Login;
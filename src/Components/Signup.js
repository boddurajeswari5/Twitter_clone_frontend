import React, { useState } from 'react';
import './Login.css'; // Style your component in a separate CSS file
import Image from "../images/twitter-removebg.png";
import styled from 'styled-components';
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_BASE_URL } from '../../src/config';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
//   width: 300px;
  padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
width: 100%;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
margin-bottom: 15px;
padding: 0.5rem 1rem;
font-size: 1rem;
background-color: #00A2E0;
`;

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const signup = (event) => {
        event.preventDefault();

        setLoading(true);
        const requestData = { fullName: fullName, email:email,userName:userName, password:password }
        axios.post(`${API_BASE_URL}/signup`, requestData)
            .then((result) => {
                if (result.status == 201) {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'User successfully registered'
                    })
                }
                setFullName('');
                setEmail('');
                setUserName('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occurred please try again later!'
                })
            })
    }
    return (
        <div className='parent'>
            <div className="login-container ">
                <Container>
                    <div className="left-side ">
                        <img src={Image} alt="Login" style={{ width: '300px', height: '200px' }} />
                    </div>
                    <LoginForm onSubmit={(e) => signup(e)}>
                        <h2 style={{textAlign:'center',marginTop:'0px'}}>SignUp</h2>
                        <Input type="text" value={fullName} placeholder="Fullname" required  onChange={(ev) => setFullName(ev.target.value)} />
                        <Input type="email" value={email} placeholder="Email" required  onChange={(ev) => setEmail(ev.target.value)} />
                        <Input type="text" value={userName} placeholder="Username" required  onChange={(ev) => setUserName(ev.target.value)} />
                        <Input type="password" value={password} placeholder="Password" required  onChange={(ev) => setPassword(ev.target.value)} />
                        <Button type="submit">Signup</Button>
                        <div>Already have an account? <a href='/login'>Login</a></div>
                    </LoginForm>
                </Container>
            </div>
        </div>
    );
};

export default Signup;

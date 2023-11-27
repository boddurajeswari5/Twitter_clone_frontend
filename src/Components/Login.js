import React,{useState} from 'react';
import './Login.css'; // Style your component in a separate CSS file
import Image from "../images/twitter-removebg.png";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import axios from 'axios'
import { API_BASE_URL } from '../../src/config'
import Swal from 'sweetalert2'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
//   width: 300px;
  padding: 20px;
//   margin-top:-20px;
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
  width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const login = (event) => {
    event.preventDefault();
    setLoading(true);
    const requestData = { email, password }
    axios.post(`${API_BASE_URL}/login`, requestData)
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          localStorage.setItem("token", result.data.result.token);
          localStorage.setItem('user', JSON.stringify(result.data.result.user));
          dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.result.user });
          setLoading(false);
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: error.response.data.error
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
                    <LoginForm onSubmit={(e) => login(e)} >
                        <h2 style={{textAlign:'center', marginTop:'0px'}}>Login</h2>
                        <Input type="email" placeholder="Email" required value={email} onChange={(ev) => setEmail(ev.target.value)}/>
                        <Input type="password" placeholder="Password" required  value={password} onChange={(ev) => setPassword(ev.target.value)}/>
                        <Button type="submit">Log In</Button>
                        <div>Don't you have an account? <a href='/signup'>Signup</a></div>
                    </LoginForm>
                </Container>
            </div>
        </div>
    );
};

export default Login;

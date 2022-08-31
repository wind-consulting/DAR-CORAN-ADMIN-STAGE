import React from 'react';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signup.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useHistory} from "react-router-dom";


const Login = () => {
  let history = useHistory();
  const [admin, setAdmin] = useState({
  
    email:"",
    password :""
  
  
  });
  const { email,password} = admin;
  const onInputChange = e => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const login =(e)=> {
    e.preventDefault();
    axios.post("http://localhost:3001/api/admin/login",admin).then((data)=>{

    console.log(data);
        history.push("/Home");


    }).catch((err)=>{
      console.log(err.response.data.message);
    });
   

  }
  const Register =(e)=>{
    e.preventDefault();

    history.push("/registre");
  }
   
    return (
        <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
       
        <h1 className="mb-3 fs-3 fw-normal">Log In</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address"  name="email"   value={email} onChange={e => onInputChange(e)} autoComplete="email" className="position-relative" />
        </Form.Group>
        <br/>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="password"  name="password"   value={password} onChange={e => onInputChange(e)} className="position-relative" />
          </Form.Group>
        <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group>

        
        <div className="d-grid">
          <Button variant="primary" size="lg" onClick={login}>Log In </Button>
        </div>
        <div className="d-grid">
          <Button variant="primary" size="lg" onClick={Register}>create New Account </Button>
        </div>
        <p className="mt-5 text-muted">&copy; 2021-2022</p>
      </Form>
    </Container>
      );
    
};

export default Login;
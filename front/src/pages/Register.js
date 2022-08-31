import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signup.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const Register = () => {
  let history = useHistory();
const [admin, setAdmin] = useState({
    first_name: "",
    last_name: "",
    email:"",
    password :""
  
  
  });
  let [error , setError ]=useState(false)
  const {first_name, last_name, email,password} = admin;
  const onInputChange = e => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const registre =(e)=> {
    e.preventDefault();
    console.log(admin)
    if(admin.first_name&& admin.last_name && admin.email&&admin.password)
    axios.post("http://localhost:3001/api/admin/register",admin).then((data)=>{
    setError(false)
    alert('Data Inserted');
     history.push("/Login");


    }).catch((err)=> 
    {console.log(err); 
    setError(true)}
    )
    else
    {
      setError(true)
    }
  }
   
    return (
        <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
       
        <h1 className="mb-3 fs-3 fw-normal">Please sign up</h1>
        <br/>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address"  name="email"   value={email} onChange={e => onInputChange(e)} autoComplete="email" className="position-relative" />
        </Form.Group>
        <br/>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="password"  name="password"   value={password} onChange={e => onInputChange(e)} className="position-relative" />
        </Form.Group>
        <br/>
        <Form.Group className="mb-3" controlId="sign-in-firstname">
          <Form.Control type="text" size="lg" placeholder="First Name" autoComplete="firstName"  name="last_name"   value={last_name} onChange={e => onInputChange(e)} className="position-relative" />
        </Form.Group>
        <br/>
        <Form.Group className="mb-3" controlId="sign-in-lastname">
          <Form.Control type="text" size="lg" placeholder="Last Name" autoComplete=" lastName" name="first_name"   value={first_name} onChange={e => onInputChange(e)} className="position-relative" />
        </Form.Group>
                 
          {error?<span style={{color :"red" , float: 'left'}}>BAD REQUEST</span>: <></>}
 <br/> 
        <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg" onClick={registre}>sign up</Button>
        </div> 

        <p className="mt-5 text-muted">&copy; 2021-2022</p>
      </Form>
    </Container>
      );
    }

export default Register
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
import {useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // event handler
    const emailHandler = (e)=>{  
        setEmail(e.target.value);
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
    }

    if(user){
        navigate(from, {replace: true});
    }
    // form submit 
    const signInhandler = (e)=>{
        e.preventDefault();
        if(password.length < 6){
            setErrorMessage('password lenght 6 up');
            return;
        }
        signInWithEmailAndPassword(email, password);
        console.log(e.target.email);
    }
  return (
    <section className="pt-5 pb-5">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <Card>
              <Card.Body>
                <Form onSubmit={signInhandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    onBlur={emailHandler}
                    name="email"
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    onBlur={passwordHandler}
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Link to="/forgot-password">Forgot Password ?</Link>
                  </div>
                  <p>{errorMessage}</p>
                  {
                    error ? <p>{error?.message}</p> : ''
                  }
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
                <p>New Genius Car? <Link to='/register' className="text-danger">Please Login</Link></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;

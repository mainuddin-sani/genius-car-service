import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword,user,loading,] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    // event handler
    const emailHandler = (e)=>{
        setEmail(e.target.value);
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
    }
    const confirmPasswordHandler = (e)=>{
        setConfirmPassword(e.target.value)
    }

    if(user){
        navigate('/home');
    }
    // form submit 
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError('Does not password match');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
  return (
    <section className="pt-5 pb-5">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <Card>
              <Card.Body>
                <Form onSubmit={formSubmitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    onBlur={emailHandler}
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
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    onBlur={confirmPasswordHandler}
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                  </div>
                  <p style={{color: 'red'}}>{error}</p>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
                <p>Already have a account <Link to="/login">Login</Link></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;

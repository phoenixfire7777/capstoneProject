import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';




export default function LoginForm({ userName, password, setUserName, setPassword, setUserLogin, login}) {



    // const navigate = useNavigate();

    const [validated, setValidated] = useState(false);

   async function handleSubmit(e){
        const form = e.currentTarget;
        e.preventDefault()
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log("this is working")
       
        setValidated(true);
        login()
        
    };

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="username"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <Form.Control.Feedback type='invalid'>Please enter a username.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type='invalid'>Please enter a password.</Form.Control.Feedback>
                    </Form.Group>
                </Row>


                <Button type="submit" >Login</Button>
                <Button onClick={() => setUserLogin(true)}>Register</Button>{' '}
            </Form>
        </Container>


    )
}
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function UserDataForm({
    setEmail, 
    setUserName, 
    setPassword, 
    setFirstName, 
    setLastName, 
    setCity, 
    setStreet, 
    setNumber, 
    setZipcode, 
    setLat, 
    setLong, 
    setPhone, 
    signUpNewUser,
    setUserLogin
}){
    const [validated, setValidated] = useState(false);
    
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    signUpNewUser()
  };

  return (
    <Container>
    <Form id='signupForm' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}          />
          <Form.Control.Feedback type='invalid'>Please enter a first name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>Please enter a last name.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter an email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="UserName"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Street</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Street"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setStreet(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a street address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Number</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Number"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setNumber(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="City" 
            required 
            onChange={(e) => setCity(e.target.value)}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="State" 
          required 
          onChange={(e) => setStreet(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Zip" 
          required 
          onChange={(e) => setZipcode(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Latitude</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Latitude"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setLat(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please please enter latitude.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Longitude</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Longitude"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setLong(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a longitude.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Phone</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Phone"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a phone number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" >Submit form</Button>
      <Button  onClick={() => setUserLogin(false)}>Login</Button>{' '}
    </Form>
    </Container>
  );
}
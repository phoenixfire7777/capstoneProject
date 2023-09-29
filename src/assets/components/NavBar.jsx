import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function NavBar({ cart, searchProducts, setSearchProducts, token, setToken, authenticated, setAuthenticated, cartCount}) {
  // console.log(searchProducts)
 const navigate = useNavigate();
  function logout(){
    localStorage.clear()
        setToken(null)
        setAuthenticated(false)
        navigate("/")

  }


  return (
    <Navbar sticky="top" bg="primary" data-bs-theme="dark">

      <Container>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          <Button variant="primary"><Link to="/"><strong>Home</strong></Link></ Button>
          {!authenticated
            // ? <Nav.Link href="/authenticate">Login/SignUp</Nav.Link>
            ?<Button variant="primary"><Link to="/authenticate"><strong>Login/Signup</strong></Link></Button>

            :<Dropdown >
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Settings
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/profile">Profile</Link>
</Dropdown.Item> 
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          }
          {/* <Nav.Link href="/cart">Cart {cart.length}</Nav.Link> */}
          <Button variant="primary"><Link to="/cart"><strong>Cart{cartCount}</strong> </Link></Button>

          
        </Nav>
        <Form inline="true">
          <Row xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'} xxl={'auto'}>
            <Col xs="0">
              <Form.Control
                as='input'
                id='string'
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={(e) => setSearchProducts(e.target.value)}

              />
            </Col>
            <Col xs="auto">
              <Button variant="light"><Link to={`/search/${searchProducts}`}>🔍</Link></Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  )
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

export default function NavBar({searchProducts, setSearchProducts, cart, authenticated}){
  // console.log(searchProducts)



return (
    <Navbar sticky="top" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!authenticated
            ?<Nav.Link href="/authenticate">Login/SignUp</Nav.Link>
            : <div> </div>
}
            <Nav.Link href="/cart">Cart {cart.length}</Nav.Link>
            <Nav.Link href="/setting">Settings</Nav.Link>
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
            <Button type="submit" href={`/search/${searchProducts}`} variant="light">🔍</Button>
          </Col>
        </Row>
      </Form>
        </Container>
      </Navbar>
)
}
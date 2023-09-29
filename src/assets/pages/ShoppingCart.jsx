
import { Table } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

//This page displays users items in their cart.
export default function ShoppingCart({ cart }) {

    console.log(cart)

    if (cart.length !== 0) {
        return (
            <div>


                <Table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => (
                                <tr key={item.id}>
                                    <td>
                                    <Figure>
                                        <Figure.Image
                                            width={50}
                                            height={50}
                                            alt="171x180"
                                            src={item.image}
                                        />
                                        <Figure.Caption>
                                            {item.title}
                                        </Figure.Caption>
                                    </Figure>
                                    </td>
                                    <td>
                                        {item.quantity}
                                        <Button>-</Button>
                                        <Button>+</Button>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity * item.price}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={3}>Final Total</td>

                            <td>{cart.reduce((price, item) => price + item.quantity * item.price, 0)}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
    else {
        return (
            <Container>
                <Row>Your Cart is empty! Please add items to your cart to continue shopping!</Row>
            </Container>
        )
    }
}
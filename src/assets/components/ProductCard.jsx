import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// import { useState } from 'react';




export default function ProductCard({ product, isActive, addToCart}) {
    // const { id, title, price, category, description, image } = product

    // function addToCart(product setCart){
    //     const cartItem = {
    //         ...product,
    //         quantity: 1
    //     }

    //     setCart([...cart, cartItem]);
    // }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>Product: {product.title}</Card.Title>
                <Card.Text>
                    Description: {product.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>category: {product.category}</ListGroup.Item>

                <ListGroup.Item>price: ${product.price}</ListGroup.Item>
            </ListGroup>
            {isActive
                ? <Card.Body>
                    <Button href={`/product/${product.id}`}>View</Button>
                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>{' '}
                </Card.Body>
                : <Card.Body>
                    <Button  onClick={() => addToCart(product)}>Add to Cart</Button>{' '}
                </Card.Body>
            }
        </Card>
    )
}
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// import { useState } from 'react';




export default function ProductCard({ product, isActive, addToCart}) {
    const { id, title, price, category, description, image, rating } = product

    // function addToCart(product setCart){
    //     const cartItem = {
    //         ...product,
    //         quantity: 1
    //     }

    //     setCart([...cart, cartItem]);
    // }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Product: {title}</Card.Title>
                {!isActive
                ?<Card.Text>
                    Description: {description}
                </Card.Text>
                :<div></div>
                }
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>category: {category}</ListGroup.Item>
                <ListGroup.Item>Rating: {rating.rate}</ListGroup.Item>
                <ListGroup.Item>price: ${price}</ListGroup.Item>
            </ListGroup>
            {isActive
                ? <Card.Body>
                    <Button href={`/product/${id}`}>View</Button>
                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>{' '}
                </Card.Body>
                : <Card.Body>
                    <Button  onClick={() => addToCart(product)}>Add to Cart</Button>{' '}
                </Card.Body>
            }
        </Card>
    )
}
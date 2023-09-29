import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

// import { useState } from 'react';





export default function ProductCard({ product, isActive, addToCart}) {
    const { id, title, price, category, description, image, rating } = product
    const navigate = useNavigate();
        
    function navToSingleProd(){
    navigate(`/product/${id}`)
    }

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
                {rating && rating.rate !== undefined ? ( // Add a conditional check for rating
        <ListGroup.Item>Rating: {rating.rate}</ListGroup.Item>
      ) : null}
                <ListGroup.Item>price: ${price}</ListGroup.Item>
            </ListGroup>
            {isActive
                ? <Card.Body>
                    <Button onClick={() => navToSingleProd()}>View</Button>
                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>{' '}
                </Card.Body>
                : <Card.Body>
                    <Button  onClick={() => addToCart(product)}>Add to Cart</Button>{' '}
                </Card.Body>
            }
        </Card>
    )
}
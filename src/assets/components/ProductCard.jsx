import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// import { useState } from 'react';


export default function ProductCard({ id, title, price, category, description, image, isActive }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Title: {title}</Card.Title>
                <Card.Text>
                    Description: {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>category: {category}</ListGroup.Item>
                <ListGroup.Item>price: ${price}</ListGroup.Item>
            </ListGroup>
            {isActive
                ? <Card.Body>
                    <Button href={`/product/${id}`}>Link</Button>
                    <Button type="submit">Button</Button>{' '}
                </Card.Body>
                : <Card.Body>
                    <Button type="submit">Button</Button>{' '}
                </Card.Body>
            }
        </Card>
    )
}
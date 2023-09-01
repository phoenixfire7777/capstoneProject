import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


    export default function ProductCard({title, price, category, description, image}){
    console.log()
    return(
        <Card style={{ width: '18rem' } }>
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
      <Card.Body>
      <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
      </Card.Body>
    </Card>
        // <div>
        //     <p>title:{title}</p>
        //     <p>title:{price}</p>
        //     <p>title:{description}</p>
        //     <p>title:{category}</p>
        //     <img src={image} alt="" />
        // </div>
    )
}
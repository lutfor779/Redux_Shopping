import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, title, photo, price, remaining } = product;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={photo} height={420} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Remaining: {remaining}
                    </Card.Text>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Card.Text>
                        <Link to={`product/${_id}`}>
                            <Button>Detail</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
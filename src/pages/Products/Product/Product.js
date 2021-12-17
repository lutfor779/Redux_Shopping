import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, title, photo, price } = product;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={photo} height={420} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Card.Text>
                        <Link to={`product/${_id}`}>
                            <Button variant="warning" size="sm" className='px-3' >
                                Detail
                            </Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { singleProduct } from '../../../features/productReducer';

const TargetProduct = () => {
    const product = useSelector(state => state.products.value.singleProduct);
    const { productId } = useParams();
    const dispatch = useDispatch();

    const { category, photo, price, rating, remaining, title } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => dispatch(singleProduct(data)))
    }, [productId, dispatch]);


    return (
        <Container>
            <Row>
                <Col xm={12} md={8} xl={6} className="mx-auto">
                    <Card>
                        <Card.Img variant="top" src={photo} height={480} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <span>Category: {category}</span>
                            </Card.Text>
                            <Card.Text>
                                Remaining: {remaining}
                                Price: ${price}
                            </Card.Text>
                            <Card.Text>
                                <Link to={`/products`}>
                                    <Button>Back</Button>
                                </Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TargetProduct;
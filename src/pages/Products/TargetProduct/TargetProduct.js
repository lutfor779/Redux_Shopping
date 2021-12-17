import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeProduct, singleProduct } from '../../../features/reducers/productReducer';
import Cart from '../../Shared/Cart/Cart';

const TargetProduct = () => {
    const product = useSelector(state => state.products.value.singleProduct);
    const { productId } = useParams();
    const dispatch = useDispatch();

    const { _id, category, photo, price, remaining, title } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => dispatch(singleProduct(data)))
        dispatch(removeProduct());
    }, [productId, dispatch]);

    const handleClick = id => {
        console.log('clicked ', id);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={8} lg={9}>
                    <Card>
                        <Row className='align-items-center'>
                            <Col xs={12} md={8}>
                                <Card.Img variant="top" src={photo} height={580} />
                            </Col>
                            <Col xs={12} md={4}>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        <span>Category: {category}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        Remaining: {remaining} Price: ${price}
                                    </Card.Text>
                                    <Button
                                        onClick={() => handleClick(_id)}
                                        size="sm">
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <Cart />
                </Col>
            </Row>
        </Container>
    );
};

export default TargetProduct;
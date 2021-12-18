import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';

const AllProducts = () => {
    const products = useSelector(state => state.products.value.allProducts);
    const isLoading = useSelector((state) => state.hold.value.loading);

    const navigate = useNavigate();

    useEffect(() => {
        if (products.length < 1) {
            navigate('/');
        }
    }, [products, navigate]);

    return (
        isLoading ?
            <Loading />
            :
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product => <Product key={product._id} product={product} />)
                    }
                </Row>
            </Container>
    );
};

export default AllProducts;
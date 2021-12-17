import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loading } from '../../../features/holdReducer';
import { allProducts } from '../../../features/productReducer';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';

const AllProducts = () => {
    const products = useSelector(state => state.products.value.allProducts);
    const isLoading = useSelector((state) => state.hold.value.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => dispatch(allProducts(data)))
            .finally(dispatch(loading(false)));
    }, [dispatch]);


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
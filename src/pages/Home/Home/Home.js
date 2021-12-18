import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loading } from '../../../features/reducers/holdReducer';
import { allProducts } from '../../../features/reducers/productReducer';
import Product from '../../Products/Product/Product';
import Banner from '../../Shared/Banner/Banner';
import Loading from '../../Shared/Loading/Loading';

const Home = () => {
    const products = useSelector(state => state.products.value.allProducts);
    const isUpdate = useSelector(state => state.products.value.update);
    const isLoading = useSelector(state => state.hold.value.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loading(true));
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                dispatch(allProducts(data));
                dispatch(loading(false))
            })

    }, [dispatch, isUpdate]);

    const homeProducts = products.length > 0 && products.slice(6, 12);

    return (
        <div>
            {
                isLoading ?
                    <Loading />
                    :
                    <div>
                        <Banner />
                        <Container className='my-5'>
                            <h1>Our Some Products</h1>
                            <Row xs={1} md={2} lg={3} className="g-4 py-5">
                                {
                                    homeProducts && homeProducts.map(product => <Product key={product._id} product={product} />)
                                }
                            </Row>
                            <Link to="/products">
                                <Button variant='danger' className='px-5'>Explore more</Button>
                            </Link>
                        </Container>
                    </div>
            }
        </div>
    );
};

export default Home;
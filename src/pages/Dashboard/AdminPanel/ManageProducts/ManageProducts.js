import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const products = useSelector(state => state.products.value.allProducts);
    const navigate = useNavigate();

    useEffect(() => {
        if (products.length < 1) {
            navigate('/');
        }
    }, [products, navigate])

    return (
        <div>
            <h1>Total {products.length} Products</h1>
            <br />
            <Container>
                <Table striped bordered hover variant='dark' responsive>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th style={{ minWidth: '250px' }}>Title</th>
                            <th style={{ minWidth: '300px' }}>Image Link</th>
                            <th>Category</th>
                            <th>Gender</th>
                            <th>Price</th>
                            <th>Quality</th>
                            <th>Rating</th>
                            <th style={{ minWidth: '130px' }}>Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ManageProduct key={product._id} product={product} />)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageProducts;
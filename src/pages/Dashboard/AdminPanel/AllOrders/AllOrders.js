import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loading } from '../../../../features/reducers/holdReducer';
import { allOrders } from '../../../../features/reducers/orderReducer';
import Order from '../../Shared/Order/Order';
import Popup from '../../Shared/Popup/Popup';

const AllOrders = () => {
    const orders = useSelector(state => state.orders.value.allOrders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loading(true));
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                dispatch(allOrders(data));
                dispatch(loading(false));
            });
    }, [dispatch]);


    if (orders.length < 1) {
        return (<Popup />);
    }

    return (
        <Container>
            <Table striped bordered hover variant='dark' responsive>
                <thead>
                    <tr>
                        <th style={{ minWidth: '200px' }}>Title</th>
                        <th>Price</th>
                        <th style={{ minWidth: '250px' }}>Client</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Verify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <Order key={order._id} order={order} />)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default AllOrders;
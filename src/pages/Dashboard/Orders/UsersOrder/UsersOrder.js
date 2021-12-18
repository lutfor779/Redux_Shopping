import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loading } from '../../../../features/reducers/holdReducer';
import { allOrders } from '../../../../features/reducers/orderReducer';
import useAuth from '../../../../hooks/useAuth';
import Order from '../../Shared/Order/Order';

const UsersOrder = () => {
    const orders = useSelector(state => state.orders.value.allOrders);
    const dispatch = useDispatch();
    const { user } = useAuth();

    useEffect(() => {
        dispatch(loading(true));
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                dispatch(allOrders(data));
                dispatch(loading(false));
            });
    }, [dispatch, user.email]);
    return (
        <Container>
            <Table striped bordered hover variant='dark' responsive>
                <thead>
                    <tr>
                        <th style={{ minWidth: '200px' }}>Title</th>
                        <th>Price</th>
                        <th style={{ minWidth: '250px' }}>Status</th>
                        <th>Delete</th>
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

export default UsersOrder;
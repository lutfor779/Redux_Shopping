import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { allOrders } from '../../../../features/reducers/orderReducer';
import useAuth from '../../../../hooks/useAuth';

const Order = ({ order }) => {
    const orders = useSelector(state => state.orders.value.allOrders);
    const { _id, productId, status, name, email } = order;

    const { admin } = useAuth();

    const [product, setProduct] = useState({});
    const [condition, setCondition] = useState(status);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fierce-ocean-20596.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);


    const handleAccept = (id) => {
        const updateStatus = { status: 'Approved' };

        fetch(`https://fierce-ocean-20596.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setCondition('Approved');
                    alert('Product Status Set To Approved');
                }
            })
    }

    const handleDelete = id => {
        const confirm = window.confirm('Want to Delete this item?');

        if (confirm) {
            fetch(`https://fierce-ocean-20596.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        dispatch(allOrders(remaining));
                        alert('Deleted successfully');
                    }
                })
        }
    }

    return (
        <tr>
            <td>{product.title}</td>
            <td>${product.price}</td>
            {
                admin && <td>{name}</td>
            }
            {
                admin && <td>{email}</td>
            }
            <td>{condition}</td>
            {
                admin ?
                    <td className='d-flex justify-content-between'>
                        <small>
                            <Button
                                onClick={() => handleAccept(_id)}
                                disabled={condition === 'Approved'}
                                variant="light"
                                size='sm'>&#10004;</Button>
                        </small>
                        <small>
                            <Button
                                onClick={() => handleDelete(_id)}
                                variant="light"
                                size='sm'>&#10060;</Button>
                        </small>
                    </td>
                    :
                    <td >
                        <small>
                            <Button
                                onClick={() => handleDelete(_id)}
                                variant="light"
                                size='sm'>&#10060;</Button>
                        </small>
                    </td>
            }
        </tr>
    );
};

export default Order;
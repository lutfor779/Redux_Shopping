import React, { useEffect, useState } from 'react';

const Order = ({ order }) => {
    const { productId } = order;
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);


    return (
        <tr>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
        </tr>
    );
};

export default Order;
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, update } from '../../../../features/reducers/productReducer';

const ManageProduct = ({ product }) => {
    const { _id, title, photo, category, price, remaining, rating } = product;
    const productInfo = { title, photo, category, price, remaining, rating };
    const products = useSelector(state => state.products.value.allProducts);

    const [updateData, setUpdateData] = useState(productInfo);
    const dispatch = useDispatch();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updateInfo = { ...productInfo };
        updateInfo[field] = value;
        setUpdateData((updateInfo));
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    dispatch(update(true));
                    alert('Update product');
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(update(false)))
    }

    const handleDelete = (id) => {
        const confirm = window.confirm('Want to delete this item?');

        if (confirm) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = products.filter(data => data._id !== id);
                        dispatch(allProducts(remaining));
                        alert('Deleted successfully');
                    }
                })
        }
    }

    return (
        <tr>
            <td><img src={product.photo} alt="" height={30} /></td>
            <td>  <Form.Control type="text" name="title"
                onBlur={handleOnBlur} defaultValue={title} /></td>
            <td>  <Form.Control type="text" name="photo"
                onBlur={handleOnBlur} defaultValue={photo} /></td>
            <td>  <Form.Control type="text" name="category"
                onBlur={handleOnBlur} defaultValue={category} /></td>
            <td>  <Form.Control type="text" name="for"
                onBlur={handleOnBlur} defaultValue={product.for} /></td>
            <td>  <Form.Control type="number" name="price"
                onBlur={handleOnBlur} defaultValue={price} /></td>
            <td>  <Form.Control type="number" name="remaining"
                onBlur={handleOnBlur} defaultValue={remaining} /></td>
            <td>  <Form.Control type="number" name="rating"
                onBlur={handleOnBlur} defaultValue={rating} /></td>
            <td className='d-flex justify-content-between'>
                {/* <small> */}
                <Button
                    onClick={() => handleUpdate(_id)}

                    variant="light">&#10004;</Button>
                {/* </small> */}
                {/* <small> */}
                <Button
                    onClick={() => handleDelete(_id)}
                    variant="light">&#10060;</Button>
                {/* </small> */}
            </td>

        </tr>
    );
};

export default ManageProduct;
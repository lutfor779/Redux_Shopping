import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loading } from '../../../../features/reducers/holdReducer';
import { addingProductData } from '../../../../features/reducers/productReducer';
import Loading from '../../../Shared/Loading/Loading';



const AddProduct = () => {
    const productData = useSelector((state) => state.products.value.addingProductData);
    const isLoading = useSelector((state) => state.hold.value.loading);

    const dispatch = useDispatch();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        dispatch(addingProductData(newProductData))
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    alert('Added successfully')
                }
            })
            .finally(dispatch(loading(false)))
    }

    // console.log(isLoading);
    return (
        isLoading ? <Loading />
            :
            <Container>
                <Form
                    onSubmit={handleSubmit}
                    className="py-4 w-md-50 mx-auto bg-light p-5 text-start">

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder='product name'
                            onBlur={handleOnBlur}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control
                            type="text"
                            name="photo"
                            placeholder='url'
                            onBlur={handleOnBlur}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            placeholder='Shirt/T-shirt/Combo'
                            onBlur={handleOnBlur}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>For</Form.Label>
                        <Form.Control
                            type="text"
                            name="for"
                            placeholder='Men/Women'
                            onBlur={handleOnBlur}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            onBlur={handleOnBlur}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            name="remaining"
                            onBlur={handleOnBlur}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            name="rating"
                            placeholder='0 to 5'
                            onBlur={handleOnBlur}
                            required />
                    </Form.Group>

                    <Button
                        variant="outline-danger"
                        type="submit"
                        className="px-5"
                    >
                        Submit &#8594;
                    </Button>
                </Form>
            </Container>
    );
};

export default AddProduct;
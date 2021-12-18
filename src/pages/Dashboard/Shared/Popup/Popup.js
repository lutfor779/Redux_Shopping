import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
    const navigate = useNavigate();
    return (
        <Container style={{ display: "flex", alignItems: "center", height: "75vh" }}>
            <Alert
                variant="danger"
                onClose={() => navigate('/products')}
                style={{ maxWidth: "576px", margin: "auto" }}
                dismissible>
                <Alert.Heading>Oh Dear! You didn't purchase any product yet!</Alert.Heading>
                <p>
                    Please purchase any product to get access in it!!!
                </p>
            </Alert>
        </Container>
    );
};

export default Popup;
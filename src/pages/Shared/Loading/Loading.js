import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: "100vh", justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <strong className='fs-2'>Loading</strong>
            <Spinner animation="grow" variant="danger" size="sm" />
            <Spinner animation="grow" variant="warning" size="sm" />
            <Spinner animation="grow" variant="success" size="sm" />
        </div>
    );
};

export default Loading;
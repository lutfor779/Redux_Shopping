import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();
    let location = useLocation();

    if (isLoading) { return <Spinner animation="grow" variant="danger" /> }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
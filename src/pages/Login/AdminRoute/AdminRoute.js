import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useFirebase();
    const location = useLocation();

    if (isLoading) { return <Spinner animation="grow" variant="danger" /> }

    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;
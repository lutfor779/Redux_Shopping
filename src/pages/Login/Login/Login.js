import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle, logOut, user, isLoading } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            {
                user.email ? <Button onClick={() => logOut()}>
                    SignOut
                </Button> : <Button onClick={() => signInWithGoogle(location, navigate)}>
                    Google Login
                </Button>
            }

            {isLoading && <Spinner animation="grow" variant="danger" />
            }
        </div>
    );
};

export default Login;
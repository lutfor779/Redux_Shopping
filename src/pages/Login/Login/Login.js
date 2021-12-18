import React from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle, logOut, user, isLoading } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", alignItems: "center", height: "75vh", margin: "auto" }}>
            <Alert variant="warning" style={{ minWidth: "320px", minHeight: '280px', margin: "auto" }}>
                <Alert.Heading>Please Login</Alert.Heading>
                <div className='mt-5 mb-3'>
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
                {user.email && <Alert variant="success">
                    Login Success
                </Alert>}

            </Alert>
        </div>
    );
};

export default Login;
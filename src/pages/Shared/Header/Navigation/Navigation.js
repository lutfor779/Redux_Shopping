import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../Loading/Loading';

const Navigation = () => {
    const { user, logOut, admin, isLoading } = useAuth();
    return (
        isLoading ?
            <Loading />
            :
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark" >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Redux Store</Navbar.Brand >
                    </LinkContainer >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="home">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="products">
                                <Nav.Link>Products</Nav.Link>
                            </LinkContainer>
                            {
                                admin ?
                                    <NavDropdown title="Dashboard" id="collasible-nav-dropdown">                             <LinkContainer to="/dashboard/orders">
                                        <NavDropdown.Item>Manage Orders</NavDropdown.Item>
                                    </LinkContainer>
                                        <LinkContainer to="/dashboard/products">
                                            <NavDropdown.Item>Manage Products</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/dashboard/addProduct">
                                            <NavDropdown.Item>Add Product</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                    :
                                    <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                                        <LinkContainer to="/dashboard/usersOrder">
                                            <NavDropdown.Item>My Orders</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/dashboard/payment">
                                            <NavDropdown.Item>Payment</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                            }
                            <LinkContainer to="contact">
                                <Nav.Link>Contact Me</Nav.Link>
                            </LinkContainer>
                        </Nav>

                        <Nav>
                            {
                                user.email ?
                                    <Button variant='warning' size="sm"
                                        onClick={() => logOut()}>
                                        Logout
                                    </Button>
                                    :
                                    <LinkContainer to="login">
                                        <Nav.Link>
                                            <Button variant='primary' size='sm'>
                                                Login
                                            </Button>
                                        </Nav.Link>
                                    </LinkContainer>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
    );
};

export default Navigation;
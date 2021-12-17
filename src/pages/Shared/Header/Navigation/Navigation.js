import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useFirebase from '../../../../hooks/useFirebase';

const Navigation = () => {
    const { user, logOut, admin } = useFirebase();
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark" >
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                </LinkContainer>

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
                                <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                                    <LinkContainer to="/dashboard/addProduct">
                                        <NavDropdown.Item>Add Product</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/dashboard/payment">
                                        <NavDropdown.Item>Payment</NavDropdown.Item>
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
            </Container>
        </Navbar>
    );
};

export default Navigation;
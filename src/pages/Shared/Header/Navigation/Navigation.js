import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
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
                        {/* <LinkContainer to="dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer> */}

                        {/* asdfdf */}
                        <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                            <LinkContainer to="/dashboard/usersOrder">
                                <NavDropdown.Item>My Orders</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/dashboard/payment">
                                <NavDropdown.Item>Payment</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        {/* lsadf */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
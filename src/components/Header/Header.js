import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Cycle Mart</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/myproduct'>My Products</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
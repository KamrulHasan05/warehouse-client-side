import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <header>
            <Navbar expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Cycle Mart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            {user?.email ? <>
                                <Nav.Link as={Link} to='/myproduct'>My Products</Nav.Link>
                                <Nav.Link as={Link} to='/manage-inventory'>Manage Inventory</Nav.Link>
                                <Nav.Link as={Link} to='/add-product'>Add Product</Nav.Link>
                                <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>

                                <Nav.Link as={Link} to='#' onClick={() => signOut(auth)}>Logout</Nav.Link>
                                <p style={{ margin: '0', color: 'white', lineHeight: '40px' }}>{user?.displayName}</p>
                            </>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="#home">Meu Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link1" onClick={() => setExpanded(false)}>Link 1</Nav.Link>
                        <Nav.Link href="#link2" onClick={() => setExpanded(false)}>Link 2</Nav.Link>
                        <Nav.Link href="#link3" onClick={() => setExpanded(false)}>Link 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
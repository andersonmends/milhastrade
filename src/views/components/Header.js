import React from 'react';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import { Banner468x60 } from "./AdsterraWidget "

function Header() {
    return (
        <>
            <Navbar bg='primary' variant='dark' expand="sm">
                <Container className=''>
                    <Navbar.Brand href="/"> Milhastrade</Navbar.Brand>
                    <Navbar.Toggle className='navbar-dark' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/Cartoes">Cartões</Nav.Link>
                            <Nav.Link href="/Programas">Programas</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Navbar className='justify-content-center text-center mb-1'>
                <Card.Text style={{ fontSize: '12px' }}> Acompanhe a cotação de milhas da Hotmilhas e Maxmilhas com gráfico
                    do histórico de preços,e com base nos dados decida o momento certo de comprar, vender milhas ou negociar no
                    particular
                </Card.Text>

            </Navbar>

            
        </>
    )
}

export default Header;


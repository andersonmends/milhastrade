import React from 'react';
import tudoAzulLogo from "./assets/images/tudoazul-logo.webp"
import smilesLogo from "./assets/images/smiles-logo.webp"
import latampassLogo from "./assets/images/latampass-logo.webp"
import { ListGroup, Row, Col, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { dataTudoazul } from './assets/data';
import { dataSmiles } from './assets/data';
import Chart from './components/Chart';
import ButtonCia from './components/ButtonCia';

function App() {

  const fanBlue = "#14649C"
  const monaLisa = "#FCA292"
  const clairvoyant = "#34054C"

  const newsData = [
    { title: 'Título da Notícia 1', description: 'Descrição da Notícia 1' },
    { title: 'Título da Notícia 2', description: 'Descrição da Notícia 2' },
    { title: 'Título da Notícia 3', description: 'Descrição da Notícia 3' },
  ];


  return (
    <div>
      <Navbar bg='primary' variant='dark' expand="lg" className='primary'>
        <Container>
          <Navbar.Brand href="#home">Milhas Trade</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="justify-content-md-center text-center" >

        <Row >
          <Col>
            <Card className="mt-5">
              <Card.Body >
                <Card.Title className="h-100">Hotmilhas</Card.Title>
                <div className="d-flex justify-content-center">
                  <Chart color={monaLisa} data={dataSmiles} dataXAxis={"date"} dataYAxis={"Smiles"} />
                </div>
                <ButtonCia logo={smilesLogo} cia="Smile"></ButtonCia>
                <ButtonCia logo={tudoAzulLogo} cia="Tudoazul"></ButtonCia>
                <ButtonCia logo={latampassLogo} cia="Latampass"></ButtonCia>

              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="mt-5">
              <Card.Body >
                <Card.Title className="h-100">Maxmilhas</Card.Title>
                <div className="d-flex justify-content-center">
                  <Chart color={fanBlue} data={dataTudoazul} dataXAxis={"date"} dataYAxis={"Tudoazul"} />
                </div>
                <ButtonCia logo={smilesLogo} cia="Smile"></ButtonCia>
                <ButtonCia logo={tudoAzulLogo} cia="Tudoazul"></ButtonCia>
                <ButtonCia logo={latampassLogo} cia="Latampass"></ButtonCia>

              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="mt-5">
              <Card.Body >
                <Card.Title className="h-100">Maxmilhas</Card.Title>
                <div className="d-flex justify-content-center">
                  <Chart color={clairvoyant} data={dataTudoazul} dataXAxis={"date"} dataYAxis={"Tudoazul"} />
                </div>
                <ButtonCia logo={smilesLogo} cia="Smile"></ButtonCia>
                <ButtonCia logo={tudoAzulLogo} cia="Tudoazul"></ButtonCia>
                <ButtonCia logo={latampassLogo} cia="Latampass"></ButtonCia>

              </Card.Body>
            </Card>
          </Col>

          

        </Row>


        <h2 className="mt-5" id="noticias">Notícias</h2>
        {newsData.map((news, index) => (
          <Card key={index} className="mt-3">
            <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>{news.description}</Card.Text>
              <Button variant="primary"><FaChevronRight /></Button>
            </Card.Body>
          </Card>
        ))}

      </Container>


      <Card.Footer className="text-white bg-primary">
        <Container>
          <div className="row py-3">
            <div className="col-md-6 text-left">
              Designed by{" "}
              <a href="#" target="_blank" className='text-white'>
                Midhall
              </a>
              &#169; {new Date().getFullYear()}
            </div>
            <div className="col-md-6 text-right">
              <div>
                <span>Follow Us: </span>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f px-3 text-white" />
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter pr-3 text-white" />
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-youtube pr-3 text-white" />
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-github pr-3 text-white" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Card.Footer>




    </div>
  );
}

export default App;
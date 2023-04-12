import React, { useState, useEffect } from 'react';
import tudoAzulLogo from "./assets/images/tudoazul-logo.webp"
import smilesLogo from "./assets/images/smiles-logo.webp"
import latampassLogo from "./assets/images/latampass-logo.webp"
import { ListGroup, Row, Col, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { hmData, maxData } from "./assets/data";
import Chart from './components/Chart';
import ButtonCia from './components/ButtonCia';
import SkyscannerSearchWidget from './components/SkyscannerSearchWidget';
import { Demo } from './components/Demo';
import WayAwayWidget from "./components/WayAwayWidget";
import ProfitableDisplayNetworkWidget from "./components/ProfitableDisplayNetworkWidget"
import AdscacheWidget from "./components/AdscacheWidget "
import { Helmet } from 'react-helmet';


function App() {

  const fanBlueAzul = "#14649C"
  const monaLisaGol = "#FCA292"
  const clairvoyantLatam = "#34054C"
  const [daysHotmilhas, setDaysHotmilhas] = useState(7);
  const [daysMaxmilhas, setDaysMaxmilhas] = useState(7);
  const [nameCiaHotmilhas, setNameCiaHotmilhas] = useState("Gol");
  const [colorCiaHotmilhas, setColorCiaHotmilhas] = useState(monaLisaGol);
  const [nameCiaMaxmilhas, setNameCiaMaxmilhas] = useState("Latam");
  const [colorCiaMaxmilhas, setColorCiaMaxmilhas] = useState(clairvoyantLatam);

  const newsData = [
    { title: 'Título da Notícia 1', description: 'Descrição da Notícia 1' },
    { title: 'Título da Notícia 2', description: 'Descrição da Notícia 2' },
    { title: 'Título da Notícia 3', description: 'Descrição da Notícia 3' },
  ];

  function handleHotmilhasClick(cia, color) {
    console.log(cia);
    setNameCiaHotmilhas(cia);
    setColorCiaHotmilhas(color);

  }

  function handleMaxmilhasClick(cia, color) {
    console.log(cia);
    setNameCiaMaxmilhas(cia);
    setColorCiaMaxmilhas(color);

  }

  return (

    <div>


     
      


      <Navbar bg='primary' variant='dark' expand="lg" >
        <Container>
          <Navbar.Brand href="#home">Milhastrade</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
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

      <AdscacheWidget></AdscacheWidget>

      <Container className="justify-content-md-center text-center" >
        <Row >
          <Col>
            <Card className="mt-5">
              <Card.Body >

                <Card.Title className="h-100">Hotmilhas</Card.Title>
                <Button size="sm" style={{ margin: "0px 5px 0px 20px" }} variant="outline-secondary" onClick={() => setDaysHotmilhas(7)}>7D</Button>
                <Button size="sm" style={{ margin: "0 5px" }} variant="outline-secondary" onClick={() => setDaysHotmilhas(30)}>1M</Button>
                <Button size="sm" style={{ margin: "0 5px" }} variant="outline-secondary" onClick={() => setDaysHotmilhas(180)}>6M</Button>
                <Button size="sm" style={{ margin: "0 5px" }} variant="outline-secondary" onClick={() => setDaysHotmilhas(365)}>1Y</Button>
                <Button size="sm" style={{ margin: "0 5px" }} variant="outline-secondary" onClick={() => setDaysHotmilhas(1825)}>5Y</Button>
                <div className="d-flex justify-content-center">
                  <Chart days={daysHotmilhas} color={colorCiaHotmilhas} data={hmData} dataXAxis={"date"} dataYAxis={nameCiaHotmilhas} />
                </div>
                <ButtonCia logo={smilesLogo} cia="Smile" handle={() => handleHotmilhasClick("Gol", monaLisaGol)}></ButtonCia>
                <ButtonCia logo={tudoAzulLogo} cia="Tudoazul" handle={() => handleHotmilhasClick("Azul", fanBlueAzul)}></ButtonCia>
                <ButtonCia logo={latampassLogo} cia="Latampass" handle={() => handleHotmilhasClick("Latam", clairvoyantLatam)}></ButtonCia>

              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="mt-5">
              <Card.Body >
                <Card.Title className="h-100">Maxmilhas</Card.Title>
                <Button size="sm" style={{ margin: "0px 5px 0px 20px" }} variant="outline-secondary" onClick={() => setDaysMaxmilhas(7)}>7D</Button>
                <Button size="sm" style={{ margin: "0 5px" }} variant="outline-secondary" onClick={() => setDaysMaxmilhas(30)}>1M</Button>
                <Button size="sm" style={{ margin: "0 5px" }} variant="outline-secondary" onClick={() => setDaysMaxmilhas(180)}>6M</Button>
                <Button size="sm" style={{ margin: "0 5px" }} variant="outline-secondary" onClick={() => setDaysMaxmilhas(365)}>1Y</Button>
                <Button size="sm" style={{ margin: "0 5px" }} variant="outline-secondary" onClick={() => setDaysMaxmilhas(1825)}>5Y</Button>
                <div className="d-flex justify-content-center">
                  <Chart days={daysMaxmilhas} color={colorCiaMaxmilhas} data={maxData} dataXAxis={"date"} dataYAxis={nameCiaMaxmilhas} />
                </div>
                <ButtonCia logo={smilesLogo} cia="Smile" handle={() => handleMaxmilhasClick("Gol", monaLisaGol)}></ButtonCia>
                <ButtonCia logo={tudoAzulLogo} cia="Tudoazul" handle={() => handleMaxmilhasClick("Azul", fanBlueAzul)}></ButtonCia>
                <ButtonCia logo={latampassLogo} cia="Latampass" handle={() => handleMaxmilhasClick("Latam", clairvoyantLatam)}></ButtonCia>

              </Card.Body>
            </Card>
          </Col>

        </Row>

        <br />
        <ProfitableDisplayNetworkWidget />
       
        {/* <WayAwayWidget></WayAwayWidget> */}

        {/* <Demo></Demo> */}
        {/* <SkyscannerSearchWidget /> */}



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
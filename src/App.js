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
import WayAwayWidget from "./components/WayAwayWidget";
import AdsterraNativeBannerWidget from "./components/AdsterraNativeBannerWidget"
import AdsterraBannerWidget from "./components/AdsterraBannerWidget "
import { Helmet } from 'react-helmet';
import AdscashBannerWidget from './components/AdscashBannerWidget';
import { format } from "date-fns";

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
  const [selectedCiaHotmilhas, setselectedCiaHotmilhas] = useState("Smiles");
  const [selectedCiaMaxmilhas, setselectedCiaMaxmilhas] = useState("Latampass");
  const [taxHotmilhas, setTaxHotmilhas] = useState();
  const [taxMaxmilhas, setTaxMaxmilhas] = useState();
  const [arrowTaxHotmilhas, setArrowTaxHotmilhas] = useState("");
  const [arrowTaxMaxmilhas, setArrowTaxMaxmilhas] = useState("");
  const [colorTaxHotmilhas, setColorTaxHotmilhas] = useState("");
  const [colorTaxMaxmilhas, setColorTaxMaxmilhas] = useState("");

  const newsData = [
    { title: 'Título da Notícia 1', description: 'Descrição da Notícia 1' },
    { title: 'Título da Notícia 2', description: 'Descrição da Notícia 2' },
    { title: 'Título da Notícia 3', description: 'Descrição da Notícia 3' },
  ];

  useEffect(() => {

    getPercentHotmilhas();
    getPercentMaxmilhas();

  }, [handleHotmilhasClick, handleMaxmilhasClick])

  function getPercentHotmilhas() {
    const today = hmData[0][nameCiaHotmilhas];
    const yesterday = hmData[1][nameCiaHotmilhas];

    const percent = ((today - yesterday) * 100) / yesterday

    if (percent > 0) {

      setColorTaxHotmilhas("text-success")
      setArrowTaxHotmilhas("fa fa-long-arrow-up")
      setTaxHotmilhas(percent.toPrecision(3))

    };
    if (percent < 0) {
      setColorTaxHotmilhas("text-danger")
      setArrowTaxHotmilhas("fa fa-long-arrow-down")
      setTaxHotmilhas(percent.toPrecision(3))
      const tempPercent = percent * (-1);
      setTaxHotmilhas(tempPercent.toPrecision(3))

    };

    if (percent === 0) {
      setColorTaxHotmilhas("")
      setArrowTaxHotmilhas("fa fa-minus")
      setTaxHotmilhas(percent.toPrecision(3))

    }


  }

  function getPercentMaxmilhas() {
    const today = maxData[0][nameCiaMaxmilhas];
    const yesterday = maxData[1][nameCiaMaxmilhas];

    const percent = ((today - yesterday) * 100) / yesterday

    if (percent > 0) {

      setColorTaxMaxmilhas("text-success")
      setArrowTaxMaxmilhas("fa fa-long-arrow-up")
      setTaxMaxmilhas(percent.toPrecision(3))};
    if (percent < 0) {
      setColorTaxMaxmilhas("text-danger")
      setArrowTaxMaxmilhas("fa fa-long-arrow-down")
      setTaxMaxmilhas(percent.toPrecision(3))
      const tempPercent = percent * (-1);
      setTaxMaxmilhas(tempPercent.toPrecision(3))

    };

    if (percent === 0) {
      setColorTaxMaxmilhas("")
      setArrowTaxMaxmilhas("fa fa-minus")
      setTaxMaxmilhas(percent.toPrecision(3))

    }


  }

  function handleHotmilhasClick(ciaName, color, ciaPrograma) {
    setNameCiaHotmilhas(ciaName);
    setColorCiaHotmilhas(color);
    setselectedCiaHotmilhas(ciaPrograma);

  }

  function handleMaxmilhasClick(ciaName, color, ciaPrograma) {
    setNameCiaMaxmilhas(ciaName);
    setColorCiaMaxmilhas(color);
    setselectedCiaMaxmilhas(ciaPrograma);
  }

  return (

    <div>

      <Navbar bg='primary' variant='dark' expand="lg" className='pl-1'>
        <Container className=''>
          <Navbar.Brand href="#home"> Milhastrade</Navbar.Brand>
          <Navbar.Toggle className='navbar-dark' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Cartões</Nav.Link>
              <Nav.Link href="#link">Programas</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <Navbar className='justify-content-center pl-1'>
        <Card.Text style={{ fontSize: '14px' }}> Acompanhe a cotação de milhas da Hotmilhas e Maxmilhas com gráfico
          do histórico de preços,e com base nos dados decida o momento certo de comprar, vender milhas ou negociar no
          particular
        </Card.Text>

      </Navbar>
      <Card.Text style={{ fontSize: '12px' }} className='text-center'>Atualizado em: {format(new Date(hmData[0].date), "Pp")}  </Card.Text>

      <AdsterraBannerWidget  ></AdsterraBannerWidget  >

      <Container className="justify-content-md-center text-center" >
        <Row >
          {/* Hotmilhas graphic */}
          <Col>
            <Card className="mt-2">
              <Card.Body >

                <Card.Title className="h-100">Hotmilhas</Card.Title>
                <Card.Subtitle className={`mt-1 mb-1  ${colorTaxHotmilhas}`}>
                  R${hmData[0][nameCiaHotmilhas].toPrecision(4)} <i class={arrowTaxHotmilhas}></i> {taxHotmilhas}%
                </Card.Subtitle>
                <Button
                  size="sm"
                  style={{ outline: daysHotmilhas === 7 ? "1px solid #ddd  " : "none", margin: "0px 5px 0px 20px" }}
                  variant="outline-secondary" onClick={() => setDaysHotmilhas(7)}>
                  7D
                </Button>
                <Button
                  size="sm"
                  style={{ outline: daysHotmilhas === 30 ? "1px solid #ddd  " : "none", margin: "0 5px" }}
                  variant="outline-secondary" onClick={() => setDaysHotmilhas(30)}>
                  1M
                </Button>
                <Button
                  size="sm"
                  style={{ outline: daysHotmilhas === 180 ? "1px solid #ddd  " : "none", margin: "0 5px" }}
                  variant="outline-secondary" onClick={() => setDaysHotmilhas(180)}>
                  6M
                </Button>
                <Button
                  size="sm"
                  style={{ outline: daysHotmilhas === 365 ? "1px solid #ddd " : "none", margin: "0 5px" }}
                  variant="outline-secondary" onClick={() => setDaysHotmilhas(365)}>
                  1Y
                </Button>
                <Button
                  size="sm"
                  style={{ outline: daysHotmilhas === 1825 ? "1px solid #ddd " : "none", margin: "0 5px" }}
                  variant="outline-secondary" onClick={() => setDaysHotmilhas(1825)}>
                  5Y
                </Button>
                <div className="d-flex justify-content-center">
                  <Chart days={daysHotmilhas} color={colorCiaHotmilhas} data={hmData} dataXAxis={"date"} dataYAxis={nameCiaHotmilhas} />
                </div>
                <ButtonCia
                  selectedCia={selectedCiaHotmilhas} 
                  logo={smilesLogo}
                  cia="Smiles"
                  handle={() => handleHotmilhasClick("Gol", monaLisaGol, "Smiles")}>
                </ButtonCia>
                <ButtonCia
                  selectedCia={selectedCiaHotmilhas}
                  logo={tudoAzulLogo}
                  cia="Tudoazul"
                  handle={() => handleHotmilhasClick("Azul", fanBlueAzul, "Tudoazul")}>

                </ButtonCia>
                <ButtonCia
                  selectedCia={selectedCiaHotmilhas}
                  logo={latampassLogo}
                  cia="Latampass"
                  handle={() => handleHotmilhasClick("Latam", clairvoyantLatam, "Latampass")}>

                </ButtonCia>

              </Card.Body>


            </Card>
          </Col>

          {/* Maxmilhas graphic */}
          <Col>
            <Card className="mt-2">
              <Card.Body >
                <Card.Title className="h-100">Maxmilhas</Card.Title>
                <Card.Subtitle className={`mt-1 mb-1  ${colorTaxMaxmilhas}`}>
                  R${maxData[0][nameCiaMaxmilhas].toPrecision(4)} <i class={arrowTaxMaxmilhas}></i> {taxMaxmilhas}%
                </Card.Subtitle>
                <Button
                  size="sm"
                  style={{ outline: daysMaxmilhas === 7 ? "1px solid #ddd" : "none", margin: "0px 5px 0px 20px" }}
                  variant="outline-secondary" onClick={() => setDaysMaxmilhas(7)}>
                  7D
                </Button>
                <Button
                  size="sm"
                  style={{ outline: daysMaxmilhas === 30 ? "1px solid #ddd" : "none", margin: "0 5px" }}
                  variant="outline-secondary" onClick={() => setDaysMaxmilhas(30)}>
                  1M
                </Button>
                <Button
                  size="sm"
                  style={{ outline: daysMaxmilhas === 180 ? "1px solid #ddd" : "none", margin: "0 5px" }}
                  variant="outline-secondary" onClick={() => setDaysMaxmilhas(180)}>
                  6M
                </Button>
                <Button
                  size="sm"
                  style={{ outline: daysMaxmilhas === 365 ? "1px solid #ddd" : "none", margin: "0 5px" }}
                  variant="outline-secondary" onClick={() => setDaysMaxmilhas(365)}>
                  1Y
                </Button>
                <Button
                  size="sm"
                  style={{ outline: daysMaxmilhas === 1825 ? "1px solid #ddd" : "none", margin: "0 5px" }}
                  variant="outline-secondary" onClick={() => setDaysMaxmilhas(1825)}>
                  5Y
                </Button>
                <div className="d-flex justify-content-center">
                  <Chart days={daysMaxmilhas} color={colorCiaMaxmilhas} data={maxData} dataXAxis={"date"} dataYAxis={nameCiaMaxmilhas} />
                </div>
                <ButtonCia
                  selectedCia={selectedCiaMaxmilhas}
                  logo={smilesLogo}
                  cia="Smiles"
                  handle={() => handleMaxmilhasClick("Gol", monaLisaGol, "Smiles")}>

                </ButtonCia>
                <ButtonCia
                  selectedCia={selectedCiaMaxmilhas}
                  logo={tudoAzulLogo}
                  cia="Tudoazul"
                  handle={() => handleMaxmilhasClick("Azul", fanBlueAzul, "Tudoazul")}>

                </ButtonCia>
                <ButtonCia
                  selectedCia={selectedCiaMaxmilhas}
                  logo={latampassLogo}
                  cia="Latampass"
                  handle={() => handleMaxmilhasClick("Latam", clairvoyantLatam, "Latampass")}>

                </ButtonCia>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <AdsterraNativeBannerWidget />


        <h2 className="mt-2" id="noticias">Notícias</h2>
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

      {/* <AdscashBannerWidget /> */}

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
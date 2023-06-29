import React, { useState, useEffect } from 'react';
import tudoAzulLogo from "../../assets/images/tudoazul-logo.webp"
import smilesLogo from "../../assets/images/smiles-logo.webp"
import latampassLogo from "../../assets/images/latampass-logo.webp"
import { Row, Col, Container, Card, Button, Heading } from 'react-bootstrap';
import { hmData, maxData } from "../../assets/data";
import Chart from '../components/Chart';
import ButtonCia from '../components/ButtonCia';
import { format } from "date-fns";
import { Link, NavLink } from 'react-router-dom';
import News from '../components/News';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';

function Home() {

  const fanBlueAzul = "#14649C"
  const monaLisaGol = "#FCA292"
  const clairvoyantLatam = "#34054C"
  const [daysHotmilhas, setDaysHotmilhas] = useState(7);
  const [daysMaxmilhas, setDaysMaxmilhas] = useState(7);
  const [nameCiaHotmilhas, setNameCiaHotmilhas] = useState("Gol");
  const [colorCiaHotmilhas, setColorCiaHotmilhas] = useState(monaLisaGol);
  const [nameCiaMaxmilhas, setNameCiaMaxmilhas] = useState("Gol");
  const [colorCiaMaxmilhas, setColorCiaMaxmilhas] = useState(monaLisaGol);
  const [selectedCiaHotmilhas, setselectedCiaHotmilhas] = useState("Smiles");
  const [selectedCiaMaxmilhas, setselectedCiaMaxmilhas] = useState("Smiles");
  const [taxHotmilhas, setTaxHotmilhas] = useState();
  const [taxMaxmilhas, setTaxMaxmilhas] = useState();
  const [arrowTaxHotmilhas, setArrowTaxHotmilhas] = useState("");
  const [arrowTaxMaxmilhas, setArrowTaxMaxmilhas] = useState("");
  const [colorTaxHotmilhas, setColorTaxHotmilhas] = useState("");
  const [colorTaxMaxmilhas, setColorTaxMaxmilhas] = useState("");


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
      setTaxHotmilhas(percent.toFixed(2))

    };
    if (percent < 0) {
      setColorTaxHotmilhas("text-danger")
      setArrowTaxHotmilhas("fa fa-long-arrow-down")
      setTaxHotmilhas(percent.toFixed(2))
      // const tempPercent = percent * (-1);
      setTaxHotmilhas(percent.toFixed(2))

    };

    if (percent === 0) {
      setColorTaxHotmilhas("")
      setArrowTaxHotmilhas("fa fa-minus")
      setTaxHotmilhas(percent.toFixed(2))

    }


  }

  function getPercentMaxmilhas() {
    const today = maxData[0][nameCiaMaxmilhas];
    const yesterday = maxData[1][nameCiaMaxmilhas];

    const percent = ((today - yesterday) * 100) / yesterday

    if (percent > 0) {

      setColorTaxMaxmilhas("text-success")
      setArrowTaxMaxmilhas("fa fa-long-arrow-up")
      setTaxMaxmilhas(percent.toFixed(2))
    };
    if (percent < 0) {
      setColorTaxMaxmilhas("text-danger")
      setArrowTaxMaxmilhas("fa fa-long-arrow-down")
      setTaxMaxmilhas(percent.toFixed(2))
      // const tempPercent = percent * (-1);
      setTaxMaxmilhas(percent.toFixed(2))

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

    <>

      <Container className="justify-content-md-center text-center" >

        <Typography variant="h5" component="h1" className='mt-2 mb-2 text-dark' sx={{ fontWeight: 450 }} >
          Hotmilhas
        </Typography>

        <Row >
          <Col>
           
            <Card className="mt-2" >
              <Card.Body  >
              

                <Card.Title className="h-100 " >
                  <Link to="https://www.hotmilhas.com.br" className="text-decoration-none text-dark">Hotmilhas</Link>
                </Card.Title>
                <Card.Subtitle className={`mt-1 mb-1  ${colorTaxHotmilhas}`}>
                  R${hmData[0][nameCiaHotmilhas].toPrecision(4)} <i className={arrowTaxHotmilhas}></i> {taxHotmilhas}%
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



          <Col>
            <Card className="mt-2">
              <Card.Body  >
                <Card.Title className="h-100" >
                  <Link to="https://www.maxmilhas.com.br" className="text-decoration-none text-dark">Maxmilhas</Link>
                </Card.Title>
                <Card.Subtitle className={`mt-1 mb-1  ${colorTaxMaxmilhas}`}>
                  R${maxData[0][nameCiaMaxmilhas].toPrecision(4)} <i className={arrowTaxMaxmilhas}></i> {taxMaxmilhas}%
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

        <Card.Text className='mb-0 mt-2' style={{ fontSize: '10px' }}>*Atualizado em: {format(new Date(hmData[0].date), "dd/MM/yyyy p")}  </Card.Text>
        <Card.Text className='mb-1' style={{ fontSize: '10px' }}>**A cotação na Hotmilhas leva em consideração o valor pago em 90 dias  </Card.Text>
        
        <Typography variant="h5" component="h1" className='mt-2 mb-2 text-dark' sx={{ fontWeight: 450 }} >
          Notícias
        </Typography>
        <News />


        <Typography variant="h5" component="h1" className='mt-5 mb-4 text-dark' sx={{ fontWeight: 450 }} >
          Cursos
        </Typography>
        <Slider>
          
        </Slider>
        <Row xs={1} md={2} lg={4} className="g-4 mb-4" >
          <React.Fragment>
          <Col >
            <Link to={`https://go.hotmart.com/B83871310R`} className="text-decoration-none">
              <Card className="card-hover">
                <Card.Img variant="top" src="https://hotmart.s3.amazonaws.com/product_pictures/e699b849-96db-4fb6-8909-eabc3818ffb0/cadastro.png" />
                <Card.Body>
                  <Card.Title className="text-decoration-none text-dark">Comunidade Papop do Holder</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          </React.Fragment>
          {/* <div style={{ height: '200px' }}></div> */}
          <React.Fragment>
          <Col>
            <Link to={`https://go.hotmart.com/B83873339R`} className="text-decoration-none">
              <Card className="card-hover">
                <Card.Img variant="top" src="https://static-media.hotmart.com/lmDIYmR1xP6tDNYg9qRwexYExaA=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/e3683c50-e410-40c4-8a1f-9fc8dbc18ad8/Amaneiramaissimplesepraticadeentenderomundodasmilhas.png?w=920" />
                <Card.Body>
                  <Card.Title className="text-decoration-none text-dark">Ebook - Fast Milhas</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          </React.Fragment>
        </Row>
     
      </Container>

    </>
  );
}

export default Home;

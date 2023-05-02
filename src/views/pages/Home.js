import React, { useState, useEffect } from 'react';
import tudoAzulLogo from "../../assets/images/tudoazul-logo.webp"
import smilesLogo from "../../assets/images/smiles-logo.webp"
import latampassLogo from "../../assets/images/latampass-logo.webp"
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { hmData, maxData } from "../../assets/data";
import Chart from '../components/Chart';
import ButtonCia from '../components/ButtonCia';
import SkyscannerSearchWidget from '../components/SkyscannerSearchWidget';
import WayAwayWidget from "../components/WayAwayWidget";
import { Banner468x60, Banner300x250, NativeBanner, SocialBar } from "../components/AdsterraWidget "
import { format } from "date-fns";
import { Link, NavLink } from 'react-router-dom';

function Home() {

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
    {
      title: 'C6 Bank vai lançar dois novos segmentos e um cartão de crédito',
      Image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/09/c6-bank-capa2019-01.jpg'
    },
    {
      title: 'Esfera inicia parceria com a Decolar e oferece até 4 pontos por real gasto',
      Image: 'https://passageirodeprimeira.com/wp-content/uploads/2023/04/by-98-472x265.png'
    },
    {
      title: 'Os 32 melhores cartões de crédito sem anuidade de 2023',
      Image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/08/cartoes-de-credito-sem-anuidade-capa2019.jpg'
    },
    {
      title: 'Feirão GOL tem passagens aéreas nacionais a partir de R$ 228 ida e volta',
      Image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2023/01/megapromo-feirao-passagens-aereas-rio-de-janeiro-capa-2023.jpg'
    },
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
      setTaxMaxmilhas(percent.toPrecision(3))
    };
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

    <>

      <Container className="justify-content-md-center text-center" >
        <Row >
          <Col>
            <Card className="mt-2" >
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
              <Card.Text style={{ fontSize: '10px' }}>Atualizado em: {format(new Date(hmData[0].date), "Pp")}  </Card.Text>


            </Card>
          </Col>



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
              <Card.Text style={{ fontSize: '10px' }}>Atualizado em: {format(new Date(maxData[0].date), "Pp")}  </Card.Text>

            </Card>
          </Col>

        </Row>




        <h2 className="mt-2" id="noticias">Notícias</h2>


        <Row xs={1} md={2} lg={4} className="g-4">
          {newsData.map((news, index) => (
            <React.Fragment key={index}>
              <Col>
                <NavLink to="/about" className="text-decoration-none">
                  <Card key={index} className="mt-3 cardTest">
                    <Card.Img variant="top" src={news.Image} />
                    <Card.Body>
                      <Card.Title className="text-decoration-none text-dark">{news.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              </Col>
              {index === 1 ? <NativeBanner /> : null}
            </React.Fragment>
          ))}
        </Row>



      </Container>


    </>
  );
}

export default Home;

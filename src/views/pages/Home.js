import React, { useState, useEffect } from 'react';
import tudoAzulLogo from "../../assets/images/tudoazul-logo.webp"
import smilesLogo from "../../assets/images/smiles-logo.webp"
import latampassLogo from "../../assets/images/latampass-logo.webp"
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
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
      Image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/09/c6-bank-capa2019-01.jpg',
      content: '<p>O<a href="www.c6bank.com.br" classname="text-dark text-decoration"><strong> C6 Bank </strong><a>vai investir pesado para conseguir aumentar a base de clientes, principalmente de<strong> alta renda</strong>. O banco digital, que começou oferecendo uma conta gratuita, está se aprimorando. Atualmente, já existe o <strong>Carbon Partner</strong>, que é o segmento de alta renda, mas serão lançados dois novos:</p><br><ul><li><strong>Segmento intermediário</strong> (média renda), sem nome definido, abaixo do <strong>Carbon Partner</strong>. Será como uma espécie de <strong>Itaú Uniclass, Bradesco Exclusive e Santander Van Gogh</strong>. Alguns clientes já estão enquadrados nele;</li><br><li><strong>Grafeno</strong> (high), que será um segmento superior ao <strong>Carbon Partner</strong>, e se assemelha ao <strong>Private Bank</strong> dos outros bancos.</li></ul><br><p>Sobre os cartões de crédito, ainda não há informações oficiais, mas o banco pretende lançar um superior ao <strong>C6 Carbon Mastercard Black</strong>. A ideia é colocar no mercado um cartão capaz de concorrer com o <strong>BRB DUX Visa Infinite e ao Bradesco Aeternum Visa Infinite</strong>.</p><br><p>Até o momento, o mercado só tem um cartão diferenciado na bandeira Mastercard, que é o <strong>Itaú The One Mastercard Black</strong>. Espera-se que o cartão do C6 Bank seja similar, com pontuação mais alta e acessos ilimitados às salas VIP.</p><br><small>fonte: <a href="www.cartoesdecredito.me" classname="text-dark text-decoration">www.cartoesdecredito.me</a></small>'
    },
    {
      title: 'Esfera inicia parceria com a Decolar e oferece até 4 pontos por real gasto',
      Image: 'https://passageirodeprimeira.com/wp-content/uploads/2023/04/by-98-472x265.png',
      content: '<p>A <strong>Esfera</strong> iniciou uma parceria com a <strong>Decolar</strong> e está oferecendo até <strong> <a href="https://www.esfera.com.vc/p/decolar/e000100402?utm_source=passageiro_de_primeira&amp;utm_medium=blog" classname="text-dark text-decoration"" target="_blank" rel="noopener">4 pontos por real gasto em compras </strong></a>. A oferta, válida até domingo (30), contempla compras de passagens aéreas, hospedagens, locação de carros, pacotes, seguro viagem, transfer, entre outros serviços.</p><br><small>fonte: <a href="www.cartoesdecredito.me" classname="text-dark text-decoration">https://passageirodeprimeira.com/</a></small>'
    },
    {
      title: 'Latam Pass tem passagens nacionais a partir de apenas 1.735 pontos',
      Image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/10/a320-neo-latam-capa2019-01.jpg',
      content: '<p>O Latam Pass está com uma promoção de <a href="https://www.melhoresdestinos.com.br/passagens-aereas"  data-wpel-link="internal" rel="follow" >passagens aéreas</a> nacionais com pontuação reduzida, mas seja rápido pois vale só até às 23h59 de hoje (11/05)! Encontramos trechos a partir de apenas 1.735 pontos para viajar entre maio e setembro deste ano, inclusive nas férias de julho! Os valores são por trecho com taxas a incluir.</p><h2>Promoção de passagens aéreas nacionais com pontos Latam Pass</h2> <p>O menor valor é para viajar do <a classname="text-dark text-decoration fw-bold" href="https://www.melhoresdestinos.com.br/o-que-fazer-no-rio-de-janeiro.html" data-wpel-link="internal" rel="follow">Rio de Janeiro</a> para <a href="https://guia.melhoresdestinos.com.br/florianopolis-65-c.html" data-wpel-link="internal" rel="follow">Florianópolis</a>, mas tem outros trechos em promoção, como do Rio para <a href="https://guia.melhoresdestinos.com.br/belo-horizonte-203-c.html" data-wpel-link="internal" rel="follow">Belo Horizonte</a> por 2.702 pontos, <a href="https://www.melhoresdestinos.com.br/dicas-coisas-de-graca-fazer-sao-paulo.html" data-wpel-link="internal" rel="follow">São Paulo</a> para <a href="https://guia.melhoresdestinos.com.br/curitiba-185-c.html" data-wpel-link="internal" rel="follow">Curitiba</a> por 2.215 pontos, São Paulo para <a href="https://guia.melhoresdestinos.com.br/brasilia-57-c.html" data-wpel-link="internal" rel="follow">Brasília</a> por 3.658 pontos e de Goiânia para o Rio por 4.387 pontos.</p> <p>Para o <a href="https://www.melhoresdestinos.com.br/melhores-destinos-nordeste-brasileiro.html" data-wpel-link="internal" rel="follow">Nordeste</a> tem do Rio de Janeiro para <a href="https://guia.melhoresdestinos.com.br/natal-20-c.html" data-wpel-link="internal" rel="follow">Natal</a> por 6.750 pontos, de BH para <a href="https://guia.melhoresdestinos.com.br/salvador-16-c.html" data-wpel-link="internal" rel="follow">Salvador</a> por 7.590 pontos, de Brasília para <a href="https://guia.melhoresdestinos.com.br/recife-108-c.html" data-wpel-link="internal" rel="follow">Recife</a> por 7.056 pontos e de São Paulo para <a href="https://guia.melhoresdestinos.com.br/aracaju-182-c.html" data-wpel-link="internal" rel="follow">Aracajú</a> por 11.931 pontos.</p><br><small>fonte: <a href="www.cartoesdecredito.me">https://www.melhoresdestinos.com.br/</a></small>'

    },
    {
      title: 'Cartão C6 Graphene vai ter anuidade de quase R$ 4 mil',
      Image: 'https://passageirodeprimeira.com/wp-content/uploads/2021/04/passageirodeprimeira.com-c6-bank-lanca-conta-internacional-de-investimentos-c6-bank-conta-global-de-investimentos.png',
      content: '<p>O <a classname="text-dark text-decoration fw-bold" href="https://cartoes.cc/c6bank" data-wpel-link="external" target="_blank" rel="external noopener noreferrer">C6 Bank</a> vai lançar dois novos segmentos, além de um cartão de crédito para concorrer com o <a classname="text-dark text-decoration fw-bold" href="https://www.cartoesdecredito.me/cartoes/cartao-de-credito-brb-dux-visa-infinite/" data-wpel-link="internal">BRB DUX Visa Infinite</a> e <a classname="text-dark text-decoration fw-bold" href="https://www.cartoesdecredito.me/cartoes/cartao-de-credito-bradesco-aeternum-visa-infinite/" data-wpel-link="internal">Bradesco Aeternum Visa Infinite</a>. O banco ainda não divulga informações oficiais, mas o <strong>C6 Graphene</strong> está saindo do forno.</p><ul><li><a classname="text-dark text-decoration fw-bold" href="https://www.cartoesdecredito.me/contas/c6-bank-vai-lancar-dois-novos-segmentos-e-um-cartao-de-credito/" data-wpel-link="internal">C6 Bank vai lançar dois novos segmentos e um cartão de crédito</a></li></ul ><p></p><p>A anuidade já foi confirmada: <strong>R$ 3.960,00</strong>, em 12 vezes de R$ 330,00.</p><p>Pelo altíssimo valor, se equiparando com o <a classname="text-dark text-decoration fw-bold" href="https://cartoes.cc/theone" data-wpel-link="external" target="_blank" rel="external noopener noreferrer">Itaú The One Mastercard Black</a>, tem que vir <strong>benefícios sensacionais</strong> para valer a pena. O <strong>The One</strong>, como dizem na internet, <strong>flopou</strong>. Será que o <strong>C6</strong> vai surpreender?</p><ul><li><a classname="text-dark text-decoration fw-bold" href="https://www.cartoesdecredito.me/cartoes/itau-nao-consegue-clientes-interessados-no-the-one-mastercard-black/" data-wpel-link="internal">Itaú não consegue clientes interessados no The One Mastercard Black</a></li></ul> <br><small>fonte: <a classname="text-dark text-decoration fw-bold" href="www.cartoesdecredito.me">www.cartoesdecredito.me</a></small>'
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
              <Card.Text style={{ fontSize: '10px' }}>Atualizado em: {format(new Date(hmData[0].date), "dd/MM/yyyy p")}  </Card.Text>


            </Card>
          </Col>



          <Col>
            <Card className="mt-2">
              <Card.Body >
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
              <Card.Text style={{ fontSize: '10px' }}>Atualizado em: {format(new Date(maxData[0].date), "dd/MM/yyyy p")}  </Card.Text>

            </Card>
          </Col>

        </Row>




        <h2 className="mt-2" id="noticias">Notícias</h2>


        <Row xs={1} md={2} lg={4} className="g-4">
          {newsData.map((news, index) => (
            <React.Fragment key={index}>
              <Col>
                <Link to={`/news/${index}`} state={news} className="text-decoration-none">
                  <Card key={index} className="mt-3 cardHover">
                    <Card.Img variant="top" src={news.Image} />
                    <Card.Body>
                      <Card.Title className="text-decoration-none text-dark">{news.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              //{index === 1 ? <NativeBanner /> : null}
            </React.Fragment>
          ))}
        </Row>



      </Container>


    </>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser/dist/rss-parser';
import cheerio from 'cheerio';
import axios from 'axios';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



async function fetchRSSFeed() {
  const parser = new Parser();
  // https://www.melhorescartoes.com.br/feed
  // com axios consegui e cors consegui pegar as imagens de capa do melhores destinos

  // https://www.nasa.gov/rss/dyn/breaking_news.rss

  // https://pontospravoar.com/feed/
  // no feed do proprio pontos para voar tem a foto de capa

  // se der ruim com heroku proxy cors, tem formas de criar um proxy para fazer requisição ou pode ser que no 
  // vercel funcione normal.

  const feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://pontospravoar.com/feed/');
  // console.log(feed);
  return feed.items.map(item => ({
    ...item,
    content: item['content:encoded'] ? item['content:encoded'] : item.content,
  }));
}


async function extractCoverImageFromLink(link) {
  try {
    const response = await axios.get("https://cors-anywhere.herokuapp.com/" + link);
    const html = response.data;
    const $ = cheerio.load(html);
    const metaImage = $('meta[property="og:image"]').attr('content');
    return metaImage ? metaImage : null;
  } catch (error) {
    console.error('Error fetching link:', error);
    return null;
  }
}

function News() {

  const [rssItems, setRssItems] = useState([]);

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
    async function fetchData() {
      const items = await fetchRSSFeed();
      const updatedItems = await Promise.all(items.map(async (item) => {
        const coverImage = await extractCoverImageFromLink(item.link);
        return {
          ...item,
          coverImage: coverImage,
        };
      }));
      setRssItems(updatedItems);
    }

    fetchData();
  }, []);



  return (
    <>

      <Slider
        dots={true}
        infinite={true}
        slidesToShow={4}
        slidesToScroll={4}
        autoplay={true}
        autoplaySpeed={4000}
        responsive={[
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              // vertical: true, // Adiciona o carrossel na vertical
              // verticalSwiping: true // Permite navegar na vertical arrastando o carrossel
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: false,
              autoplay: false,
              vertical: true, // Adiciona o carrossel na vertical
              verticalSwiping: false // Permite navegar na vertical arrastando o carrossel
            }
          }
        ]}
      >
        {rssItems.map((news, index) => (
          <Col key={index}>
            <Link to={`/news/${index}`} state={news} className="text-decoration-none">
              <Card className="mt-2 mb-5 card-hover card-news">
                <Card.Img variant="top" src={news.coverImage} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="text-decoration-none text-dark">{news.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Slider>




      {/* <Row xs={1} md={2} lg={4} className="g-4">
        {rssItems.map((news, index) => (
          <React.Fragment key={index}>
            <Col>
              {/* <Link to={`/news/${index}`} state={news} className="text-decoration-none"> }
                <Card key={index} className="mt-3 cardHover">
                <Card.Img variant="top" src={news.coverImage} />
                  <Card.Body>
                    <Card.Title className="text-decoration-none text-dark">{news.title}</Card.Title>
                  </Card.Body>
                </Card>
              {/* </Link> }
            </Col>
          </React.Fragment>
        ))}
      </Row> */}

      {/* <div>

        <ul>
          {rssItems.map((item, index) => {

            return (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
                {/* {firstImage && <img src={firstImage} alt="First Image" />}}
                {/* <p>{item.contentSnippet}</p> }
                {/* <img src={item.coverImage} alt="Cover Image" /> }
                {/* <p>{item.enclosure.url}</p> }
                {/* <img src={item.enclosure.url} alt="First Image" /> }


                {// <p dangerouslySetInnerHTML={{ __html: contentWithoutImages }}></p>}
               </li> 
            ); 
           })} 
        </ul>
      </div> */}
     
    </>
  )


}

export default News;
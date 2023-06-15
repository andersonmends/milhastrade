import React from "react";
import { useLocation } from "react-router";
import { Container, Card, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

export function NewsPage() {

  let { state } = useLocation();
  // console.log(state);

  return (
    <div>
      <Container>

        <Row >

          <Col lg={8}>
            <Card className="mt-3 mb-3 cardTest text-justify" style={{ maxWidth: 900 }}>

              <Card.Body >
                <Card.Img variant="top" src={state.Image} />
                <Card.Title as="h2" className="mt-5 text-center">{state.title}</Card.Title>
                {parse(state.content)}

              </Card.Body>
            </Card>

          </Col>

          <Col >
            <Link to={`https://go.hotmart.com/B83871310R`} className="text-decoration-none">
              <Card className="mt-3 cardHover">
                <Card.Img variant="top" src="https://hotmart.s3.amazonaws.com/product_pictures/e699b849-96db-4fb6-8909-eabc3818ffb0/cadastro.png" />
                <Card.Body>
                  <Card.Title className="text-decoration-none text-dark">Comunidade Papop do Holder</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col>
            <Link to={`https://go.hotmart.com/B83873339R`} className="text-decoration-none">
              <Card className="mt-3 cardHover">
                <Card.Img variant="top" src="https://static-media.hotmart.com/lmDIYmR1xP6tDNYg9qRwexYExaA=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/e3683c50-e410-40c4-8a1f-9fc8dbc18ad8/Amaneiramaissimplesepraticadeentenderomundodasmilhas.png?w=920" />
                <Card.Body>
                  <Card.Title className="text-decoration-none text-dark">Ebook - Fast Milhas</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>


      </Container>

    </div>
  );
}

import React from "react";
import { useLocation } from "react-router";
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

export function NewsPage() {

  let { state } = useLocation();
  // console.log(state);

  return (
    <div>
      <Container className="text-center">
        <Card className="mt-3 cardTest">

          <Card.Body>
            <Card.Img variant="top" src={state.Image} style={{maxWidth:800, justifyContent:"center"}}/>
            <Card.Title as="h2" className="mt-5">{state.title}</Card.Title>

          </Card.Body>
        </Card>
      </Container>

    </div>
  );
}

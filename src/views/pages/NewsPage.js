import React from "react";
import {useLocation } from "react-router";
import {Container, Card,  } from 'react-bootstrap';
import parse from 'html-react-parser';

export function NewsPage() {

  let { state } = useLocation();
  // console.log(state);

  return (
    <div>
      <Container>
        <Card className="mt-3 mb-3 cardTest text-justify" style={{ maxWidth: 900 }}>

          <Card.Body >
            <Card.Img variant="top" src={state.Image} />
            <Card.Title as="h2" className="mt-5 text-center">{state.title}</Card.Title>
            {parse(state.content)}

          </Card.Body>
        </Card>
      </Container>

    </div>
  );
}

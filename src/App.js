import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { Card, Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { format } from "date-fns";
import { dataRecharts } from './assets/data';


function App() {

  const data = dataRecharts;
  console.log(data);

  const newsData = [
    { title: 'Título da Notícia 1', description: 'Descrição da Notícia 1' },
    { title: 'Título da Notícia 2', description: 'Descrição da Notícia 2' },
    { title: 'Título da Notícia 3', description: 'Descrição da Notícia 3' },
  ];

  return (
    <div>
      <Navbar bg="primary " expand="lg">
        <Container>
          <Navbar.Brand href="#home">Minha Página</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#grafico">Gráfico de Cotação</Nav.Link>
              <Nav.Link href="#noticias">Notícias</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <h2 id="grafico">Gráfico de Cotação</h2>
        <Card>
          <Card.Body>
            <AreaChart width={600} height={300} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
                  <stop offset="90%" stopColor="blue" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                tickFormatter={(value) => format(new Date(value), "dd MMM")}
                interval={15}
              />
              <YAxis />
              <CartesianGrid vertical="" />
              <Tooltip
                labelFormatter={(value) => format(new Date(value), "dd MMM yyyy")}
              />
              <Legend />
              <Area type="Function" dataKey="Tudoazul" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </Card.Body>
        </Card>

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

      <footer className="bg-light py-3">
        <Container>
          <p className="text-center">Todos os direitos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
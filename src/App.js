import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { Card, Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import {format} from "date-fns";

function App() {

  function generateData() {
    const data = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date(2022, 0, i + 1);
      const tudoazul = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
      const smiles = Math.floor(Math.random() * (300 - 50 + 1)) + 50;

      data.push({ date, tudoazul, smiles });
      // console.log(date);
      
    }

    return data;
  }

  const data = generateData();

  const newsData = [
    { title: 'Título da Notícia 1', description: 'Descrição da Notícia 1' },
    { title: 'Título da Notícia 2', description: 'Descrição da Notícia 2' },
    { title: 'Título da Notícia 3', description: 'Descrição da Notícia 3' },
  ];

  const CustomizedAxisTick = ({ x, y, payload }) => {
    const date = new Date(payload.value);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;

    return (
      <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">{formattedDate}</text>
    );
  };
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
            <AreaChart width={500} height={300} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                tickFormatter={(value) => format(new Date(value), "dd MMM")}
              />
              <YAxis />
              <CartesianGrid vertical="" />
              <Tooltip />
              <Legend />
              <Area type="Function" dataKey="tudoazul" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="Function" dataKey="smiles" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
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
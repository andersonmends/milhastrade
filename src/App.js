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
      <Navbar expand="lg" className='bg-primary.bg-gradient'>
        <Container >
          <Navbar.Brand className="text-white"  href="#home">Minha Página</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#grafico" className="text-white">Gráfico de Cotação</Nav.Link>
              <Nav.Link href="#noticias" className="text-white">Notícias</Nav.Link>
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

       
        <Card.Footer className="bg-primary text-white mt-5" bg="primary" >
          <div className="row py-3">
            <div className="col-md-6 text-left">
              Designed by{" "}
              <a href="#" target="_blank">
                Develop
              </a>
              &#169; {new Date().getFullYear()}
            </div>
            <div className="col-md-6 text-right">
              <div>
                <span>Follow Us: </span>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f px-3" />
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter pr-3" />
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-youtube pr-3" />
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-github pr-3" />
                </a>
              </div>
            </div>
          </div>
          </Card.Footer>
          
        
      
    </div>
  );
}

export default App;
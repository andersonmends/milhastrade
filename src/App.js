import React from 'react';
import Home from './views/pages/Home';
import Header from './views/components/Header';
import Footer from './views/components/Footer';
import About from './views/pages/About';
import Cartoes from "./views/pages/Cartoes"
import Programas from "./views/pages/Programas"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewsPage } from './views/pages/NewsPage';
import { ScrollToTop } from './views/components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import axios from 'axios';


function App() {

  // var axios = require('axios');
  var data = JSON.stringify({
    "collection": "list",
    "database": "cotacao",
    "dataSource": "sa-east-1-cluster",
    "filter": {"name": "HM"
    },
    "sort": {
      "date": -1
    }
  });

  var config = {
    method: 'post',
    url: 'https://sa-east-1.aws.data.mongodb-api.com/app/data-oxpgb/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Request-Headers': '*',
      
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjQ2ZTc0ZTM4NWMwYzdlMmZkYzJiYmNiIiwiZXhwIjoxNjg1NjY2MTYxLCJpYXQiOjE2ODU2NjQzNjEsImlzcyI6IjY0NzkzMjY5YTM5ZjQzNjc1ZGQzMzgwOCIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY0NmU3NGUzODVjMGM3ZTJmZGMyYmJjYiIsInN1YiI6IjY0NzkyNGM0YTM5ZjQzNjc1ZGNmYTY4YSIsInR5cCI6ImFjY2VzcyJ9.edF0zPs1z5k3B1vd05p0fxrElkWWFc8XdT7IXTf19Qg',
      // 'api-key': 'c4GCRrJNGK5H5tAAes4LccVDTTmY00P2yzA6LuTuv2UCStaVoOs2h9WhdeUzJmqS',
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <Header />

      
     
      {/* <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cartoes" element={<Cartoes/>} />
          <Route path="/programas" element={<Programas/>} />
          <Route path="/news/:id" element={<NewsPage/>}></Route>
        </Routes>
      </BrowserRouter> */}
      
      <Footer></Footer>
      <Analytics />
    </>
  )


}

export default App;
import React, { useState, useEffect } from 'react';
import Home from './views/pages/Home';
import Header from './views/components/Header';
import Footer from './views/components/Footer';
import News from './views/components/News';
import About from './views/pages/About';
import Cartoes from "./views/pages/Cartoes"
import Programas from "./views/pages/Programas"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewsPage } from './views/pages/NewsPage';
import { ScrollToTop } from './views/components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

function App() {
    
  return (
    <>
      <Header />
      {/* <News/> */}
      

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cartoes" element={<Cartoes/>} />
          <Route path="/programas" element={<Programas/>} />
          <Route path="/news/:id" element={<NewsPage/>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
      <Analytics />
    </>
  )

}

export default App;
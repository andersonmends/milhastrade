import React, { useState, useEffect } from 'react';
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
import Parser from 'rss-parser/dist/rss-parser';
import cheerio from 'cheerio';


async function fetchRSSFeed() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://www.melhorescartoes.com.br/feed');
  return feed.items.map(item => ({
    ...item,
    content: item['content:encoded'] ? item['content:encoded'] : item.content,
  }));
}


function extractFirstImage(content) {
  const doc = new DOMParser().parseFromString(content, 'text/html');
  const imgElement = doc.querySelector('img');
  return imgElement ? imgElement.src : null;
}

function extractContentWithoutImages(content) {
  const doc = new DOMParser().parseFromString(content, 'text/html');
  const imgElements = doc.querySelectorAll('img');
  imgElements.forEach(img => img.remove());
  return doc.body.innerHTML;
}

function App() {

  const [rssItems, setRssItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const items = await fetchRSSFeed();
      setRssItems(items);
    }

    fetchData();
  }, []);

 
    
  return (
    <>
      <Header />
      <div>
        
        <ul>
          {rssItems.map((item, index) => {
            const firstImage = extractFirstImage(item.content);
            const contentWithoutImages = extractContentWithoutImages(item.content);

            return (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
                {firstImage && <img src={firstImage} alt="First Image" />}
                <p>{item.contentSnippet}</p>
                <p dangerouslySetInnerHTML={{ __html: contentWithoutImages }}></p>
              </li>
            );
          })}
        </ul>
      </div>


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
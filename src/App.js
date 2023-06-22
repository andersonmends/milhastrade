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
import axios from 'axios';


async function fetchRSSFeed() {
  const parser = new Parser();
  // https://www.melhorescartoes.com.br/feed
  // com axios consegui e cors consegui pegar as imagens de capa do melhores destinos

  // https://www.nasa.gov/rss/dyn/breaking_news.rss

  // https://pontospravoar.com/feed/
  // no feed do proprio pontos para voar tem a foto de capa

  // se der ruim com heroku proxy cors, tem formas de criar um proxy para fazer requisição ou pode ser que no 
  // vercel funcione normal.

  const feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://www.melhorescartoes.com.br/feed');
  console.log(feed);
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

async function extractCoverImageFromLink(link) {
  try {
    const response = await axios.get("https://cors-anywhere.herokuapp.com/"+link);
    const html = response.data;
    const $ = cheerio.load(html);
    const metaImage = $('meta[property="og:image"]').attr('content');
    return metaImage ? metaImage : null;
  } catch (error) {
    console.error('Error fetching link:', error);
    return null;
  }
}

function App() {

  const [rssItems, setRssItems] = useState([]);
  

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
      <Header />
      {/* <iframe align="center" width="1200" height="1600" src="https://rss.app/embed/v1/wall/bxoIBShZL3WPdmEl" frameborder="2"></iframe> */}
      <div>
        
        <ul>
          {rssItems.map((item, index) => {
            const firstImage = extractFirstImage(item.content);
            const contentWithoutImages = extractContentWithoutImages(item.content);

            return (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
                {/* {firstImage && <img src={firstImage} alt="First Image" />} */}
                <p>{item.contentSnippet}</p>
                {item.coverImage && <img src={item.coverImage} alt="Cover Image" />}
                {/* <p>{item.enclosure.url}</p> */}
                {/* <img src={item.enclosure.url} alt="First Image" /> */}
                
                
                {/* <p dangerouslySetInnerHTML={{ __html: contentWithoutImages }}></p> */}
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
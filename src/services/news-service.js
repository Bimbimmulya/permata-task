import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsList from '../components/Blog';
import Slider from 'react-slick';

const NewsService = () => {

    var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          };
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-12-24&sortBy=publishedAt&apiKey=2f30d57eeb974f2cb37f10f6f5c8347e");
            // console.log(response);
            
            
            setArticles(response.data.articles.slice(0, 10))
        }

        getArticles()
    }, [])
  return (
        <>
        <div id='Blog' className='py-9 justify-center text-center mt-9'>
            <h1 className='text-[40px] text-text font-semibold'>Our Blog</h1>
            <p className='text-gray-400'>Temukan artikel terkini seputar mobil listrik, teknologi mutakhir, dan inovasi energi berkelanjutan dari Tesla. Dapatkan informasi singkat mengenai perkembangan terdepan perusahaan ini.</p>
         </div>
         {articles.map((item) => (
    <div key={item.url}>
        <NewsList 
            title={item.title}
            publishedAt={item.publishedAt}
            url={item.url}
            urlToImage={item.urlToImage}
        />
    </div>
))}

        </>

    
  )
}

export default NewsService

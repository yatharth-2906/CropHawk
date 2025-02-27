import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from "react";
import styles from './News.module.css';

function News(){
    const news_api = "https://newsapi.org/v2/everything?q=farming&sortBy=popularity&apiKey=7ed28638a6a9486d9a4cb49169285c83";

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch( news_api );
          const data = await response.json();
          setNews(data.articles);
        } catch (error) {
          console.error("Error fetching news:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
    if (loading) return (
      <div className={styles.loading_spinner_box}>
        <Spinner className={styles.loading_spinner} animation="border"  variant="primary"/>
      </div>);

    console.log(news);

    return (
        <div className={styles.news_container}>
            {news.map((article, index) => (
                // <NewsBlock key={index} article={article}/>
                <div className={styles.news_box} style={{ width: '18rem' }} key={index}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer"><h2 className={styles.news_title}>{article.title}</h2></a>
                  <p className={styles.news_body}>{article.content.split(" [+")[0]}</p>
                </div>
            ))}
        </div>
      );
}

export default News;
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import noImage from '../assets/no_Image.png'

function NewsContainer() {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=43d6957105b24a2a873635490dcc7611';

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json(); // Add await here
      setArticles(data.articles);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h3">News Headlines</Typography>
        
      </Grid>
      <Grid size={12}>
        <Grid size={{xs:12,md:4}}>
          {articles.map((article) => (
            <NewsCard
              key={article.title}
              news_Img={article.urlToImage || noImage}
              news_desc={article.description || "No description available"}
              news_title={article.title}
              link={article.url}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NewsContainer;

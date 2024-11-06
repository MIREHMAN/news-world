import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import noImage from '../assets/no_Image.png'

function NewsContainer() {
  const [articles, setArticles] = useState([]);
  const apiKey = 'pub_58471ab3a2b0ae7bf04df3977d3c52e6814a6';
  const url = 'https://newsdata.io/api/1/latest?apikey=pub_58471ab3a2b0ae7bf04df3977d3c52e6814a6&country=us&prioritydomain=top';

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json(); 
      setArticles(data.results);
    };
    getData();
  }, []);

  
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h3">News Headlines</Typography>
        
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
        
          {articles.map((article) => (
            <Grid size={{xs:12,md:3}}>
            <NewsCard
              key={article.title}
              news_Img={article.image_url || noImage}
              news_title={article.title}
              link={article.link}
            />
            </Grid>
          ))}
        
      </Grid>
    </Grid>
  );
}

export default NewsContainer;

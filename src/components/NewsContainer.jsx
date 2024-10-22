import React from "react";
import NewsCard from "./NewsCard";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

function NewsContainer() {
  return (
    <Grid container spacing={2}>
        <Grid size={12}>
        <Typography variant="h3">News Headlines</Typography>
      </Grid>
      <Grid size={12}>
      <Grid size={12}>
        <NewsCard news_Img='hjj' news_desc='hjhj' news_title='khjjkh' />
      </Grid>
      </Grid>
      
      
    </Grid>
  );
}

export default NewsContainer;

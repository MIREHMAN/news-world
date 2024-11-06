import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function NewsCard({ news_Img, news_desc, news_title, link }) {
  return (
    <Card sx={{ maxWidth: 300 , mt:3, ml:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={news_Img}
          alt={news_title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" >
            {news_title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {news_desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{margin:'auto', marginBottom:'10px'}}
          size="small"
          color="primary"
          variant="contained"
          aria-label={`Read more about ${news_title}`}
          onClick={() => window.open(link, "_blank")}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

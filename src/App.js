import Container from "@mui/material/Container";
import * as React from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

import "./App.css";
import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <div className="App">
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Navbar/>
          </Grid>
          <Grid size={12}>
            <Item>
              <NewsContainer/>
            </Item>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
}

export default App;

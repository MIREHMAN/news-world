import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NewsSearch from './NewsSearch';

const pages = ['Top Headlines', 'Blogs', 'About'];

function Navbar() {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NewspaperIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NEWS-WORLD
          </Typography>
            <NewsSearch/>
          
         
         
            
           
              
          
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

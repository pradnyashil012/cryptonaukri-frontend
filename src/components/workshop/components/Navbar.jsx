import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import logo from '../assets/logo.png'
import './Navbar.css'

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const drawerWidth = 240;
const navItems = ['Curriculum','Our Champions','Backbone','Perks', 'Faqs'];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const hrefHandler = (item) => {
  //   const result = "#" + {item};

  // }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography className='logo-img'  variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt='logo' />
      </Typography>
      <Divider />
      <List>
      <Button href="https://community.cryptonaukri.com/" target="_blank" sx={{ color: '#000',textAlign: 'center', textTransform: 'none', }} >Community</Button>
        {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton href={`/#${item}`} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
        ))}

        <a href='https://www.cryptonaukri.com/jobs' target="_blank"><button className='button drawer login'>Jobs</button></a>
        <a href='/register'><button className='button drawer register'>Register</button></a>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // const scrollToTop = () => {
  //     window.scroll({
  //       top: 0,
  //       left: 0,
  //       behavior: "smooth"
  //     })
  // };

  return (
    <Box  sx={{ display: 'flex' }}>
      <AppBar className='navbar' component="nav" sx={{background:'#FFFFFF;'}}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:'#000' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className='logo-img logo-padd'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <a href="/">
              <img src={logo} alt='logo' />
            </a>
          </Typography>

          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <div className="small-img">
              <a href="/">
                <img src={logo} alt='logo' />
              </a>
            </div>
          </Box>


          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button href="https://community.cryptonaukri.com/" target="_blank" sx={{ color: '#000',textTransform: 'none', fontSize:"17px" }} >Community</Button>
            {navItems.map((item) => (
                <Button href={`/#${item}`} key={item} sx={{ color: '#000', textTransform: 'none',  fontSize:"17px" }} >
                  {item}
                </Button>
            ))}
            {/* {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton href={`#${item}`} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
        ))} */}
            <a href='https://www.cryptonaukri.com/jobs' target="_blank"><button className='button login'>Jobs</button></a>
            <a href='register'><button className='button register'>Register</button></a>
          </Box>


        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
      </Box>
    </Box>
  );
}
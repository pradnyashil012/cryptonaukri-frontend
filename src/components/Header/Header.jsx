import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Button, CssBaseline, makeStyles, Container, Divider, List, ListItem, ListItemText, Drawer, Chip } from "@material-ui/core";
import { AccountCircle, ArrowDropDown, } from "@material-ui/icons";
import useStyles from './headerStyles';
import { Link, useNavigate } from "react-router-dom";
import { MenuRounded, Close } from '@mui/icons-material';

const drawerWidth = 340;


const Header = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const login = localStorage.getItem("login")
  const cUser = localStorage.getItem("cUser")
  const admin = localStorage.getItem("admin");
  const [anchor, setAnchor] = React.useState(null);
  const [signanchorEl,setSignanchorEl]= React.useState(null);
  const [signanchor,setSignanchor]=React.useState(null);

  //handleUserSignUp and handleMouseOverSignup are functions for the laptop view two types of signups
  const handleUserSignUp = (event) => {
    navigate('/signup');
    setSignanchorEl(null);
  }
  const handleCompanySignUp = (event) => {
    navigate('/busreg');
    setSignanchorEl(null);
  }
  const handleMouseOverSignup = (event)=>{
    setSignanchorEl(event.currentTarget);
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const loginsignupbtn = () => {
    navigate("/lognsignup");
    setMobileOpen(!mobileOpen);
  };

  //handleDrawerMouseOver and loginbtn are for mobile view two types of login and for some other function as well
  const handleDrawerMouseOver = (event)=>{
    setAnchorEl(event.currentTarget);
  }
  const loginbtn = () => {
    navigate("/login");
    setAnchorEl(null);
    setMobileOpen(!mobileOpen);
  };

  //handleDrawerMouseOverSignup an signupbtnUser are used for the mobile view two types of signup
  const handleDrawerMouseOverSignup = (event)=>{
    setSignanchor(event.currentTarget);
  }
  const signupbtnUser = () => {
    navigate("/signup");
    setSignanchor(null);
    setMobileOpen(!mobileOpen);
  };
  const signupbtnCompany = () =>{
    navigate("/busreg");
    setSignanchor(null)
    setMobileOpen(!mobileOpen);
  }
  const logoutMobile = () => {
    localStorage.clear();
    navigate("/");
    setMobileOpen(!mobileOpen);
  };
  const logout = () => {
    localStorage.clear();
    setAnchorEl(null);
    navigate("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const addJob = () => {
    setAnchorEl(null);
    navigate('/jobform');
  }
  const addJobMobile = () => {
    navigate('/jobform');
    setMobileOpen(!mobileOpen);
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //handleUserLogin and handleMouseOver are functions for the laptop view two types of logins
  const handleUserLogin = (event) => {
    navigate('/login');
    setAnchor(null);
  }
  const handleMouseOver = (event)=>{
    setAnchor(event.currentTarget);
  }
  //anchorEl={anchorEl},{anchor},{signanchor},{signanchorEl} se hi charo open ho rhe h se writing it here 
  //so that we can have a note of it
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Box sx={{ padding: '20px' }}>
          <div className={classes.btnbox}>
            {login ?
              <div>
                <div className={classes.MenuContainer}>
                  <MenuItem>
                    <AccountCircle className={classes.userIcon} />
                  </MenuItem>
                  <MenuItem className={classes.MenuItems}><Typography className={classes.navText} variant="h6" component="div">
                    {cUser}
                  </Typography></MenuItem>

                  {admin ?
                    <MenuItem className={classes.MenuItems} onClick={addJobMobile} as={Link} to='/jobform'>
                      <Typography className={classes.navText} variant="h6" component="div">
                        Add Job/Internship
                      </Typography>
                    </MenuItem> : <div></div>
                  }

                  <MenuItem className={classes.MenuItems} onClick={handleClose}><Button type='button' variant="outlined" color="primary" className={classes.Button} onClick={logoutMobile}>logout</Button></MenuItem>
                </div></div> : <div>
                {/* <Button className={classes.loginbttn} onClick={loginsignupbtn} as={Link} to='/loginsignup' >Login / Sign Up</Button>
                <Menu 
                    className={classes.dropdown}
                    anchorEl={anchorE1}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Login as an admin</MenuItem>
                  <MenuItem onClick={handleClose}>Login as a user</MenuItem>
                </Menu> */}
                <Button className={classes.btn} onClick={handleDrawerMouseOver}  >Login</Button>
                <Menu
                      className={classes}
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={loginbtn} >User Login</MenuItem>
                      <MenuItem  >Business Login</MenuItem>
                      
                </Menu>
                <Button className={classes.btn} onClick={handleDrawerMouseOverSignup} >Sign Up</Button>
                <Menu
                      className={classes}
                      id="menu-appbar"
                      anchorEl={signanchor}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(signanchor)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={signupbtnUser} >User Sign up</MenuItem>
                      <MenuItem onClick={signupbtnCompany} >Business Sign up</MenuItem>
                      
                </Menu>
              </div>}
          </div>
          <hr />
          <div className={classes.navlinks}>
            <MenuItem className={classes.navItem}>
              <Typography className={classes.navText} onClick={() => { navigate('/jobspage'); setMobileOpen(!mobileOpen); }} variant="h5" component="div" >
                Jobs
              </Typography>
            </MenuItem>
            <MenuItem className={classes.navItem}>
              <Typography className={classes.navText} onClick={() => { navigate('/internships'); setMobileOpen(!mobileOpen); }} variant="h5" component="div">
                Internships
              </Typography>
            </MenuItem>
          </div>
        </Box>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar} position='fixed'>
        <Container>
          <Toolbar className={classes.navbar} >
            <div className={classes.navbox}>
              <MenuItem onClick={() => { navigate('/'); }} className={classes.navLogo} >
                  <img className={classes.logo} src="img/logo.svg" alt="logo ayega bhai yaha" />
              </MenuItem>
            </div>

            <Box id='navigation' className={classes.navigation}>
              <div className={classes.navlinks}>
                <MenuItem className={classes.navItem}>
                  <Typography className={classes.navText} onClick={() => { navigate('/jobspage'); }} variant="h5" component="div" >
                    Jobs
                  </Typography>
                </MenuItem>
                <MenuItem className={classes.navItem}>
                  <Typography className={classes.navText} onClick={() => { navigate('/internships'); }} variant="h5" component="div">
                    Internships
                  </Typography>
                </MenuItem>
              </div>
              <div className={classes.btnbox}>
                {login ?
                  <div>
                    <IconButton className={classes.iconContainer}
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit">
                      <ArrowDropDown /><AccountCircle className={classes.userIcon} />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      
                      <div className={classes.MenuContainer}>
                        <MenuItem className={classes.MenuItems} ><AccountCircle className={classes.InnerUserIcon} /></MenuItem>

                        <MenuItem className={classes.MenuItems} >{cUser}</MenuItem>

                        {admin ?
                          <MenuItem className={classes.MenuItems} onClick={addJob} as={Link} to='/jobform'>Add Job/Intership</MenuItem> : <></>
                        }

                        <MenuItem className={classes.MenuItems} onClick={handleClose}><Button type='button' variant="outlined" color="primary" className={classes.Button} onClick={logout}>logout</Button></MenuItem>
                      </div>
                    </Menu></div> : <div>
                    <Button className={classes.btn} onClick={handleMouseOver} >Login</Button>
                    <Menu
                      className={classes}
                      id="menu-appbar"
                      anchorEl={anchor}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchor)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose} >Business login</MenuItem>
                      <MenuItem onClick={handleUserLogin} >User login</MenuItem>
                    </Menu>
                    <Button className={classes.btn} onClick={handleMouseOverSignup}>Sign Up</Button>
                    <Menu
                      className={classes}
                      id="menu-appbar"
                      anchorEl={signanchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(signanchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleCompanySignUp} >Business Sign up</MenuItem>
                      <MenuItem onClick={handleUserSignUp} >User Sign up</MenuItem>
                    </Menu>
                  </div>}
              </div>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <div>
                <IconButton
                  className={classes.navText}
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: 'none' } }}
                >
                  <MenuRounded />
                </IconButton>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ display: 'flex' }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* </Box> */}
      </Box>
    </>
  );
}
export default Header;
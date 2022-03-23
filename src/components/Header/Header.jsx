import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Button, CssBaseline, makeStyles, Container, Divider, List, ListItem, ListItemText, Drawer, Chip } from "@material-ui/core";
import { AccountCircle, ArrowDropDown, } from "@material-ui/icons";
import useStyles from './headerStyles';
import { Link, useNavigate } from "react-router-dom";
import { MenuRounded, Close } from '@mui/icons-material';
import axios from 'axios';
const drawerWidth = 340;


const Header = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const login = localStorage.getItem("login");
  const cUser = localStorage.getItem("cUser");
  const admin = localStorage.getItem("admin");
  const token = localStorage.getItem("token");
  const btoken = localStorage.getItem("tokenNew");
  const [user, setUser] = useState();
  const [anchor, setAnchor] = React.useState(null);
  const [signanchorEl, setSignanchorEl] = React.useState(null);
  const [signanchor, setSignanchor] = React.useState(null);

  //handleUserSignUp and handleMouseOverSignup are functions for the laptop view two types of signups
  const handleUserSignUp = (event) => {
    navigate('/userSignUp');
    setSignanchorEl(null);
  }
  const handleCompanySignUp = (event) => {
    navigate('/companySignUp');
    setSignanchorEl(null);
  }
  const handleMouseOverSignup = (event) => {
    setSignanchorEl(event.currentTarget);
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //handleDrawerMouseOver and loginbtn are for mobile view two types of login and for some other function as well
  const handleDrawerMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const UserLoginbtn = () => {
    navigate("/userLogin");
    setAnchorEl(null);
    setMobileOpen(!mobileOpen);
  };

  const CompanyLoginbtn = () => {
    navigate("/companyLogin");
    setAnchorEl(null);
    setMobileOpen(!mobileOpen);
  };

  //handleDrawerMouseOverSignup an signupbtnUser are used for the mobile view two types of signup
  const handleDrawerMouseOverSignup = (event) => {
    setSignanchor(event.currentTarget);
  }
  const signupbtnUser = () => {
    navigate("/userSignUp");
    setSignanchor(null);
    setMobileOpen(!mobileOpen);
  };
  const signupbtnCompany = () => {
    navigate("/companySignUp");
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


  const getUser = async() =>{
    if(token){
      console.log(token.split('"')[1]);
      
      const response = await axios.get('https://cryptonaukribackend.herokuapp.com/api/v1/user/loggedInUserDetails', {
                        headers: {
                          "Authorization": `Bearer ${token.split('"')[1]}`,
                        }
                      });
      console.log(response.data);
      setUser(response.data);
    }
    if(btoken){
      const response = await axios.get('https://cryptonaukribackend.herokuapp.com/api/v1/business/loggedInBusinessDetails', {
                        headers: {
                          "Authorization": `Bearer ${btoken}`,
                        }
                      });
      console.log(response.data);
      setUser(response.data);
    }
    console.log("bt",btoken)
  }

  const handleClose = () => {
    setAnchorEl(null);
    setSignanchor(null);
    setAnchor(null);
    setSignanchorEl(null);
  };
  const addJob = () => {
    setAnchorEl(null);
    navigate('/jobform');
  }
  const addJobMobile = () => {
    navigate('/jobform');
    setMobileOpen(!mobileOpen);
  }
  const goToProfile = () => {
    setAnchorEl(null);
    navigate('/businessprofile');
  }
  const goToProfileMobile = () => {
    navigate('/businessprofile');
    setMobileOpen(!mobileOpen);
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //handleUserLogin and handleMouseOver are functions for the laptop view two types of logins
  const handleUserLogin = (event) => {
    navigate('/userLogin');
    setAnchor(null);
  }

  const handleBusinessLogin = (event) => {
    navigate('/companyLogin');
    setAnchor(null);
  }

  const handleLogin = (event) => {
    setAnchor(event.currentTarget);
  }
  //anchorEl={anchorEl},{anchor},{signanchor},{signanchorEl} se hi charo open ho rhe h se writing it here 
  //so that we can have a note of it

  useEffect(()=>{
    if(token){
      getUser();
    }
  },[token])

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
                  <MenuItem onClick={()=>navigate('/aboutme')} className={classes.MenuItems}><Typography className={classes.navText} variant="h6" component="div">
                    {user?<>{user.firstName}</>:<></>}
                  </Typography></MenuItem>

                  {cUser === 'BUISNESS' ?
                    <>
                      <MenuItem className={classes.MenuItems} onClick={addJobMobile} as={Link} to='/jobform'>
                        <Typography className={classes.navText} variant="h6" component="div">
                          Add Job/Internship
                        </Typography>
                      </MenuItem>
                      <MenuItem className={classes.MenuItems} onClick={goToProfileMobile} as={Link} to='/jobform'>
                        <Typography className={classes.navText} variant="h6" component="div">
                          Profile
                        </Typography>
                      </MenuItem> </> : <div></div>
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
                  <MenuItem onClick={UserLoginbtn} >Applicant Login</MenuItem>
                  <MenuItem onClick={CompanyLoginbtn} >Company Login</MenuItem>

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
                <img className={classes.logo} src="img/logo.svg" />
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

                        <MenuItem onClick={()=>navigate('/aboutme')} className={classes.MenuItems} >{user?<>{user.firstName}</>:<></>}</MenuItem>

                        {cUser==='BUISNESS' ?
                          <>
                            <MenuItem className={classes.MenuItems} onClick={addJob} as={Link} to='/jobform'>Add Job/Intership</MenuItem>
                            <MenuItem className={classes.MenuItems} onClick={goToProfile} as={Link} to='/jobform'>Profile</MenuItem> </>
                          : <></>
                        }

                        <MenuItem className={classes.MenuItems} onClick={handleClose}><Button type='button' variant="outlined" color="primary" className={classes.Button} onClick={logout}>logout</Button></MenuItem>
                      </div>
                    </Menu></div> : <div>
                    <Button
                      aria-controls="menu-login"
                      aria-haspopup="true"
                      className={classes.btn} onClick={handleLogin} >Login</Button>
                    <Menu
                      className={classes}
                      id="menu-login"
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      onClose={handleClose}
                      anchorEl={anchor}
                      open={Boolean(anchor)}
                    >
                      <MenuItem onClick={handleBusinessLogin} >Business login</MenuItem>
                      <MenuItem onClick={handleUserLogin} >Applicant login</MenuItem>
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
                      <MenuItem onClick={handleUserSignUp} >Applicant Sign up</MenuItem>
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
      </Box>
    </>
  );
}
export default Header;
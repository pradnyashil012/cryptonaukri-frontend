import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import InternshipPage from "./components/internshipPage";
import JobsPage from "./components/JobsPage";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import BusReg from "./components/BusReg";
import { Box, createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Landing from './components/homepage/landing';
import JobForm from './components/jobPost/jobForm';
import { ToastContainer } from 'react-toastify';
import HeaderHome from "./components/Header/headerHome";
import LoginSignup from "./components/LoginSignup";
import BussinessProfile from "./components/BusinessProfile";
import  AboutUS  from "./components/AboutUS";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import DCMA from "./components/DCMA.js";
import GeneralQueries from "./components/GeneralQueries";
import Terms from "./components/Terms";
const useStyles = makeStyles((theme) => ({
  contentBody: {
    height: "auto",
    margin: 0,
    padding: 0,
    minHeight: "90vh",
  },
  body: {
    overflow: 'hidden'
  }
}));
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tab: 770,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#003979",
      home: "#02142A"
    },
    secondary: {
      main: "#D3DCEE",
    },
    text: {
      main: "#003979",
      white: "#fff"
    }
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.body}>
        <ToastContainer />
        <ThemeProvider theme={theme}>

          <Header />
          <Box className={classes.contentBody}>
            <Routes>
              
              <Route exact path="/" element={<><Landing /></>}></Route>
              <Route exact path="/businessprofile" element={<><BussinessProfile /></>}></Route>
              <Route exact path="/busreg" element={<><BusReg /></>}></Route>
              <Route exact path="/loginsignup" element={<><LoginSignup /></>}></Route>
              <Route path="/login" element={<><Login /></>}></Route>
              <Route path="/signup" element={<> <SignUp /></>}></Route>
              <Route path="/jobspage" element={<> <JobsPage /></>}></Route>
              <Route path="/internships" element={<><InternshipPage /></>}></Route>
              <Route path="/jobform" element={<><JobForm /></>}></Route>
              <Route path="/Aboutus" element={<><AboutUS /></>}></Route>
              <Route path="/Contact" element={<><Contact /></>}></Route>
              <Route path="/Privacy" element={<><Privacy /></>}></Route>
              <Route path="/DCMA" element={<><DCMA /></>}></Route>
              <Route path="/GeneralQueries" element={<><GeneralQueries /></>}></Route>
              <Route path="/Terms" element={<><Terms /></>}></Route>
            </Routes>
          </Box>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;

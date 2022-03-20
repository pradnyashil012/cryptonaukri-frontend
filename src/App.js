import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import InternshipPage from "./components/internshipPage";
import JobsPage from "./components/JobsPage";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Box, createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Landing from './components/homepage/landing';
import JobForm from './components/jobPost/jobForm';
import { ToastContainer } from 'react-toastify';
import Resume from "./components/userResume/rsume";
import { responsiveFontSizes } from "@mui/material/styles/";
import BusReg from "./components/BusnessRegestration";
import LoginSignup from "./components/LoginSignup";
import BussinessProfile from "./components/BusinessProfile";
import  AboutUS  from "./components/AboutUS";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import DCMA from "./components/DCMA.js";
import GeneralQueries from "./components/GeneralQueries";
import Terms from "./components/Terms";
import Reset from "./components/forgotPass/forgotPass";
import Otp from "./components/otp/otp";
import JobDetails from "./components/JobDetails/JobDetails";
import { AppBlocking } from "@mui/icons-material";
import ApplyJob from "./components/applyJob/applyjob";
import AboutMe from "./components/User/User";
import useToken from './utils/useToken'

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
let theme = createTheme({
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

theme = responsiveFontSizes(theme);

const App = () => {

  const {token, setToken} = useToken();
  console.log(token);

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
              <Route exact path="/details" element={<><JobDetails /></>}></Route>
              <Route exact path="/jobapplication" element={<><ApplyJob /></>}></Route>
              <Route exact path="/loginsignup" element={<><LoginSignup /></>}></Route>
              <Route path="/userLogin" element={<><Login route="user" token={token} setToken={setToken} /></>}></Route>
              <Route path="/companyLogin" element={<><Login route="company" /></>}></Route>
              <Route path="/userSignUp" element={<> <SignUp /></>}></Route>
              <Route path="/companySignUp" element={<><BusReg /></>}></Route>
              <Route path="/jobspage" element={<> <JobsPage /></>}></Route>
              <Route path="/internships" element={<><InternshipPage /></>}></Route>
              <Route path="/jobform" element={<><JobForm /></>}></Route>
              <Route path="/aboutme" element={<><AboutMe token={token} useToken={useToken}/></>}></Route>
              <Route path="/Aboutus" element={<><AboutUS /></>}></Route>
              <Route path="/Contact" element={<><Contact /></>}></Route>
              <Route path="/Privacy" element={<><Privacy /></>}></Route>
              <Route path="/DCMA" element={<><DCMA /></>}></Route>
              <Route path="/GeneralQueries" element={<><GeneralQueries /></>}></Route>
              <Route path="/Terms" element={<><Terms /></>}></Route>
              <Route path="/userResume" element={<><Resume /></>}></Route>
              <Route path="/resetPassWord" element={<><Reset /></>}></Route>
              <Route path="/Otp" element={<><Otp /></>}></Route>
            </Routes>
          </Box>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;

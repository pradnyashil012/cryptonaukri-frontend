import React, { useState } from "react";
import { Container,Grid,Typography, TextField, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        padding: "40px 10%",
        marginTop:'70px'
      },
      heading: {
        color: "white",
        backgroundColor: "#1565D5",
        borderRadius: "5px",
        padding: "10px",
        GridShadow: "0 0 10px #6292E8",
      },
      first:{
          display:'flex',
      },
      Grides:{
          padding:'5px',
          paddingTop:'15px'
      }
}))

const BusReg = ()=>{

    const [exec,setExec]=useState('');
    const [comp,setComp]=useState('');
    const [email,setEmail]=useState('');
    const [desc,setDesc]=useState('');
    const [year,setYear]=useState('');
    const [gstin,setGstin]=useState('');
    const [hq,setHq]=useState('');
    const [phoneNo,setPhoneNo]=useState('');
    const [website,setWebsite]=useState('');

    const handleExecChange = (e)=>{
        setExec(e.target.value);
        console.log(exec);
    }
    const handleCompChange = (e)=>{
        setComp(e.target.value);
        console.log(comp);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
        console.log(email);
    }
    const handleDescChange=(e)=>{
        setDesc(e.target.value);
        console.log(desc);
    }
    const handleYearChange=(e)=>{
        setYear(e.target.value);
        console.log(year);
    }
    const handleGstinChange=(e)=>{
        setGstin(e.target.value);
        console.log(gstin);
    }
    const handleHqChange=(e)=>{
        setHq(e.target.value);
        console.log(hq);
    }
    const handlePhoneNoChange=(e)=>{
        setPhoneNo(e.target.value);
        console.log(phoneNo);
    }
    const handleWebsiteChange=(e)=>{
        setWebsite(e.target.value);
        console.log(website);
    }
    const classes = useStyles();
    return(
        <div>
            <Container>
                <Grid component='form' className={classes.formContainer} >
                    <div className={classes.heading} >
                        <Typography variant="h4" >Bussiness Registration </Typography>
                    </div>
                    <Grid width='100%' className={classes.first}>
                        <Grid className={classes.Grides} width='50%'>
                            <Typography variant="h6">Name of Executive*</Typography>
                            <OutlinedInput value={exec} onChange={(e)=>handleExecChange(e)} id="outlined-basic" placeholder="Executive-Name" label="Executive-Name" fullWidth variant="outlined" className={classes.input}/>
                        </Grid>
                        <Grid className={classes.Grides} width='50%'>
                            <Typography variant="h6">Name of Comapny*</Typography>
                            <OutlinedInput value={comp} onChange={(e)=>handleCompChange(e)} id="outlined-basic" placeholder="Company-Name" label="Company-Name" fullWidth variant="outlined" className={classes.input}/>
                        </Grid>
                    </Grid>
                    <Grid width='100%' className={classes.Grides}>
                            <Typography variant="h6">Official Email</Typography>
                            <OutlinedInput value={email} onChange={(e)=>handleEmailChange} id="outlined-basic" placeholder="Email-id" label="Email-id" fullWidth variant="outlined" className={classes.input}/>
                    </Grid>
                    <Grid width='100%' className={classes.Grides}>
                        <Typography variant="h6">Description</Typography>
                        <OutlinedInput value={desc} onChange={(e)=>handleDescChange(e)} variant='filled'placeholder="Description about your company"  id="filled-multiline-flexible" maxRows={3} fullWidth multiline label="Description about your company"/>
                    </Grid>
                    <Grid width='100%' className={classes.first}>
                        <Grid width='40%' className={classes.Grides}>
                            <Typography variant="h6">Establishment Year</Typography>
                            <OutlinedInput value={year} onChange={(e)=>handleYearChange(e)} id="outlined-basic" placeholder="Established In" label="Established In" fullWidth variant="outlined" className={classes.input}/>
                        </Grid>
                        <Grid width='60%' className={classes.Grides}>
                            <Typography variant="h6">GSTIN(Optional)</Typography>
                            <OutlinedInput value={gstin} onChange={(e)=>handleGstinChange(e)} id="outlined-basic" placeholder="GSTIN" label="GSTIN" fullWidth variant="outlined" className={classes.input}/>
                        </Grid>
                    </Grid>
                    <Grid width='100%' className={classes.first}>
                        <Grid className={classes.Grides} width='50%'>
                            <Typography variant="h6">Headquarters*</Typography>
                            <OutlinedInput  value={hq} onChange={(e)=>handleHqChange(e)} id="outlined-basic" placeholder="Executive-Name" label="Executive-Name" fullWidth variant="outlined" className={classes.input}/>
                        </Grid>
                        <Grid className={classes.Grides} width='50%'>
                            <Typography variant="h6">Phone Number*</Typography>
                            <OutlinedInput value={phoneNo} onChange={(e)=>handlePhoneNoChange(e)} id="outlined-basic" placeholder="Company-Name" label="Company-Name" fullWidth variant="outlined" className={classes.input}/>
                        </Grid>
                    </Grid>
                    <Grid width='100%' className={classes.Grides}>
                        <Typography variant="h6">Website Link*</Typography>
                        <OutlinedInput value={website} onChange={(e)=>handleWebsiteChange(e)} id="outlined-basic"placeholder="Website Link" label="Website Link" fullWidth variant="outlined" className={classes.input}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default BusReg;
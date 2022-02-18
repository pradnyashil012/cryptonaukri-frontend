import React, { useState } from "react";
import { Container, Grid,Box,makeStyles,Typography, ButtonGroup,Button,Card, CardHeader, CardContent,CardActions, List,ListItem } from "@material-ui/core";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
//import { ListItemButton } from "@material-ui/icons";

const useStyles = makeStyles((theme)=>({
    mainbox:{
        marginTop:'100px',
        
    },
      leftNav:{
        //   border:'2px solid black',
          width: '29%',
          height:'500px',
        //   position:'fixed',
      },
      fixedWidthContainer: {
          marginLeft:'2px',
        width: '70%',
        // border:'2px solid red',
        height:'500px',
        overflowY:'scroll'
      },
      list:{
          height:'100%',
      },
      G:{
          height:'20%',
          alignItems:'center'
      },
      Button: {
          color:'blue',
          padding:'0px',
          height:'100%',
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
        
      },
      card:{
          marginTop:'5px',
          margin:'3px',
          height:'100%',
          display:'flex',
          flexDirection:'column',
      },
      text:{
          fontSize:'15px',
      }
}))
const cards = [1,2,3,4,5,6,7,8,9,10];

const BussinessProfile = ()=>{
    const classes = useStyles();
    const [option,setOption]=useState('Posted Jobs');

    return(
        <div className={classes.mainbox}>
            <Container>
                <Grid container className={classes.root}>
                    <Grid item className={classes.leftNav}>
                        <List className={classes.list}>
                            <ListItem  disablePadding className={classes.G}>
                                <ListItemButton  className={classes.Button}>
                                    <ListItemText  className={classes.text} primary='Hello' color="primary"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className={classes.G}>
                                <ListItemButton onClick={()=>setOption('Posted Jobs')} className={classes.Button}>
                                    <ListItemText className={classes.text} primary='Jobs' color="primary"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className={classes.G}>
                                <ListItemButton onClick={()=>setOption('Posted Internships')} className={classes.Button}>
                                    <ListItemText className={classes.text} primary='Internships' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className={classes.G}>
                                <ListItemButton className={classes.Button}>
                                    <ListItemText className={classes.text} primary='Hello' color="primary"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className={classes.G}>
                                <ListItemButton className={classes.Button}>
                                    <ListItemText className={classes.text} primary='Hello' color="primary"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                            {/* <Grid container={true} className={classes.G}>
                                <Button className={classes.Button} color='primary' fullWidth variant="outlined">
                                    <Typography>Profile Edit</Typography>
                                </Button>
                            </Grid> */}
                            {/* <Grid container={true} className={classes.G}>
                                <Button onClick={()=>setOption('Posted Jobs')} className={classes.Button} color='primary' fullWidth variant="outlined">
                                    <Typography>Your Posted Jobs</Typography>
                                </Button>
                            </Grid>
                            <Grid container={true} className={classes.G}>
                                <Button onClick={()=>setOption('Posted Internships')} className={classes.Button} color='primary' fullWidth variant="outlined">
                                    <Typography>Your Posted Internships</Typography>
                                </Button>
                            </Grid>
                            <Grid container={true} className={classes.G}>
                                <Button className={classes.Button} color='primary' fullWidth variant="outlined">
                                    <Typography>Something new</Typography>
                                </Button>
                            </Grid>
                            <Grid container={true} className={classes.G}>
                                <Button className={classes.Button} color='primary' fullWidth variant="outlined">
                                    <Typography>Interact</Typography>
                                </Button>
                            </Grid> */}
                            
                        
                    </Grid>

                    <Grid item className={classes.fixedWidthContainer}>
                        {option === "Posted Internships" && 
                        <Grid >
                        <Typography variant="h5">Your Posted Internships</Typography>
                            {cards.map((card)=>(
                                <Grid item key={card}>
                                <Card sx={{ maxWidth: 20 }} className={classes.card}>
                                    <CardHeader
                                        title="For Internships"
                                        subheader="Aug 12,2015"
                                    />
                                    <CardContent>
                                    <Typography variant="subtitle2">
                                        <span>Details : </span>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit eum. 
                                        Ab, odit voluptates. Laudantium reprehenderit exercitationem dolore deserunt. 
                                        In pariatur odit tempora placeat neque excepturi, nobis autem perferendis numquam?
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"  >View</Button>
                                    <Button size="small" color="primary"  >Applicants</Button>
                                </CardActions>
                                </Card>
                                </Grid>
                            ))};
                        </Grid> }
                        {option === "Posted Jobs" && 
                        <Grid >
                        <Typography variant="h5">Your Posted Jobs</Typography>
                            {cards.map((card)=>(
                                <Grid item key={card}>
                                <Card sx={{ maxWidth: 20 }} className={classes.card}>
                                    <CardHeader
                                        title="For Jobs"
                                        subheader="Aug 12,2015"
                                    />
                                    <CardContent>
                                    <Typography variant="subtitle2">
                                        <span>Details : </span>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit eum. 
                                        Ab, odit voluptates. Laudantium reprehenderit exercitationem dolore deserunt. 
                                        In pariatur odit tempora placeat neque excepturi, nobis autem perferendis numquam?
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"  >View</Button>
                                    <Button size="small" color="primary"  >Applicants</Button>
                                </CardActions>
                                </Card>
                                </Grid>
                            ))};
                        </Grid> }
                    </Grid>
                </Grid>   
            </Container>
        </div>
    )
}
export default BussinessProfile;
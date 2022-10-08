import React from 'react'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';

const Bullet = ({menuItem}) => {

  return (
    <>
    <List>
        {menuItem.map((item,i)=>(
            <ListItem key={i} style={{padding:0, fontWeight: 500 , color: i%2===0? 'black' : '#00008b'}}>
                <ListItemIcon><PlayArrowSharpIcon/></ListItemIcon>
                <ListItemText primaryTypographyProps={{fontWeight: 700}} style={{color: i%2===0? 'black' : '#00008b'}} primary={item} />
            </ListItem>
        ))}
    </List>
    </>
  )
}

export default Bullet

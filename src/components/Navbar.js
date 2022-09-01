import { Box,AppBar, Toolbar , styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Mail,Notifications } from '@mui/icons-material';
import ME from "../me.jpg"
const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const Search= styled("div")(({theme})=> ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}))
const Icons= styled(Box)(({theme})=> ({
   display:"none", gap:"20px", alignItems:"center"
  ,
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }

}))
const UserBox= styled(Box)(({theme})=> ({
    display:"flex", gap:"20px", alignItems:"center"
   ,
   [theme.breakpoints.up("sm")]:{
     display:"none"
   }
 
 }))
function Navbar() {
  const [open, setOpen]=useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
    <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Bookstore</Typography>   
    <MenuBookIcon sx={{display:{xs:"display",sm:"none"}}}/>
    <Search><InputBase placeholder='Search for your book...'>search for your book</InputBase></Search>    
    <Icons>
        <Badge badgeContent={4} color="error">
            <Mail  />
        </Badge> 
        <Badge badgeContent={3} color="error">
            <Notifications  />
        </Badge> 
        <Avatar sx={{weight:30,height:30}} alt="Mariem's face" src={ME} onClick={(e)=> setOpen(true)}/>
    </Icons>
    <UserBox onClick={(e)=> setOpen(true)}>
    <Avatar sx={{weight:30,height:30}} alt="Mariem's face" src={ME} />
    <Typography>
        Meriam Cherif
    </Typography>
    </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClick={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
            
       
             
    </AppBar>
  )
}

export default Navbar
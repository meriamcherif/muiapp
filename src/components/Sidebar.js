import { AccountBox, Home, MenuBook, ModeNight, Note, People, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'
import React from 'react'

function Sidebar() {
  return (

<Box
flex={1}
p={2}
sx={{ display: { xs:"none", sm:"block"}}}
>
  <Box position="fixed">
<List>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#home">
       <ListItemIcon>
        <Home/>
       </ListItemIcon>
       <ListItemText primary="Homepage" />
     </ListItemButton>
     
   </ListItem>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#home">
       <ListItemIcon>
        <Settings/>
       </ListItemIcon>
       <ListItemText primary="Settings" />
     </ListItemButton>
     
   </ListItem>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#home">
       <ListItemIcon>
        <AccountBox/>
       </ListItemIcon>
       <ListItemText primary="Profile" />
     </ListItemButton>
   </ListItem>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#home">
       <ListItemIcon>
        <MenuBook/>
       </ListItemIcon>
       <ListItemText primary="My books" />
     </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
     <ListItemButton component="a" href="#home">
       <ListItemIcon>
        <MenuBook/>
       </ListItemIcon>
       <ListItemText primary="Recommended books for me" />
     </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
     <ListItemButton component="a" href="#home">
       <ListItemIcon>
        <Note/>
       </ListItemIcon>
       <ListItemText primary="Notes" />
     </ListItemButton>
     
   </ListItem>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#home">
       <ListItemIcon>
        <People/>
       </ListItemIcon>
       <ListItemText primary="Other bookaholics" />
     </ListItemButton>  
   </ListItem>

   <ListItem disablePadding>
     <ListItemButton component="a" href="#home">
       <ListItemIcon>
        <ModeNight/>
       </ListItemIcon>
<Switch/>
     </ListItemButton>
     
   </ListItem>





 </List>
 </Box>
 </Box>
  )
}

export default Sidebar
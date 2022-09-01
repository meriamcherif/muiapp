import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import centralpark from"../centralpark.jpg"
import appeldelange from "../appeldelange.jpg"
import etapres from "../etapres.jpg"
import serastula from "../serastula.jpg"
function Rightbar() {
  return (
<Box 
flex={1}
p={2}
sx={{ display: { xs:"none", sm:"block"}}}>
  <Box position="fixed" width={300}> 
  <Typography variant="h6" fontweight={100}>
  Online friends
  </Typography>
  <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontweight={100} mt={2} mb={2}>
Latest books 
  </Typography>
  <ImageList  cols={3} rowHeight={100} gap={5}>
        
        <ImageListItem >
          <img
            src={centralpark}
            alt="central park"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src={serastula}
            alt="seras-tu là?"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src={etapres}
            alt="Et après?"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src={appeldelange}
            alt="Appel de l'ange"
            loading="lazy"
          />
        </ImageListItem>
    </ImageList>
    <Typography variant="h6" fontweight={100} mt={2} >
       Latest exchanges
    </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
</Box>
</Box>
  )
}

export default Rightbar
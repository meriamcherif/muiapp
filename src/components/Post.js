import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import images from "../images.jpg"

const Post = () => {
  return (
    <div>
            <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Ce que le jour doit à la nuit"
        subheader="August 01, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={images}
        alt="Ce que le jour doit à la nuit"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        "Mon oncle me disait : "Si une femme t'aimait, et si tu avais la présence d'esprit de mesurer l'étendue de ce privilège, aucune divinité ne t'arriverait à la cheville."
Oran retenait son souffle en ce printemps 1962. La guerre engageait ses dernières folies. Je cherchais Emilie. J'avais peur pour elle. J'avais besoin d'elle. Je l'aimais et je revenais le lui prouver. Je me sentais en mesure de braver les ouragans, les tonnerres, l'ensemble des anathèmes et les misères du monde entier."
Yasmina Khadra nous offre ici un grand roman de l'Algérie coloniale (entre 1936 et 1962) - une Algérie torrentielle, passionnée et douloureuse - et éclaire d'un nouveau jour, dans une langue splendide et avec la générosité qu'on lui connaît, la dislocation atroce de deux communautés amoureuses d'un même pays.
Salué dans le monde entier comme un écrivain majeur, Yasrnina Khadra est l’auteur, entre autres, de À quoi rêvent les loups, Les Hirondelles de Kaboul, L’Attentat (Prix des libraires 2006) et Les Sirènes de Bagdad. Son Œuvre est traduite dans trente-quatre pays. L’Attentat est en cours d’adaptation à Hollywood, et les Hirondelles de Kaboul sera porté prochainement à l’écran par le cinéma français.        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
     
    </Card>
    </div>
  )
}

export default Post
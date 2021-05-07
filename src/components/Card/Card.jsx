import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title:{
    fontSize: "2rem"
  },
  description:{
    fontSize:"1.5rem"
  },
  button:{
    fontSize:"1.2rem"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.url}
          title={props.urltitle}
        />
        <CardContent>
          <Typography   className={classes.title} gutterBottom variant="h5" component="h2">
           {props.title}
          </Typography>
          <Typography   className={classes.description} variant="body2" color="textSecondary" component="p">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button} color="primary">
          Share
        </Button>
        <Button className={classes.button} color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
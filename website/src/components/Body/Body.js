import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from "@material-ui/system";
import style from "./body.module.css";
import Carousel from "./Carousel";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
    };
  }

  render() {
    let { info } = this.state;
    let infos = info.map((val, index) => {
      return <Grid className={style.loop} key={index} item xs={4}>
          <Card className={style.card}>
      <CardActionArea>
        <CardMedia
          className={style.media}
          image="https://images.pexels.com/photos/3324720/pexels-photo-3324720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Beach
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </Grid>;
    });
    return (
      <div>
        <Carousel></Carousel>
        <div className={style.container}>
          <Grid container spacing={5}>
            {infos}
          </Grid>
        </div>
      </div>
    );
  }
}

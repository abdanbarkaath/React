import React, { Component } from "react";
import { AppBar, Button, Icon } from "@material-ui/core";
import css from "./body.module.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tutorialSteps: [
        {
          label: "San Francisco – Oakland Bay Bridge, United States",
          imgPath:
            "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          label: "Bluetit",
          imgPath:
            "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          label: "Bali, Indonesia",
          imgPath:
            "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          label: "NeONBRAND Digital Marketing, Las Vegas, United States",
          imgPath:
            "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          label: "Goč, Serbia",
          imgPath:
            "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ],
      singleImg: "",
      start: 0
    };
  }

  changeSlide = () => {
    let { tutorialSteps, start } = this.state;
    this.setState({
      singleImg: tutorialSteps[start]
    });
    console.log(start);
    console.log(tutorialSteps.length);
  };

  componentDidMount() {
    let { tutorialSteps, start } = this.state;
    this.setState({
      singleImg: tutorialSteps[start]
    });
  }
  nextSlide() {
    let { tutorialSteps, start } = this.state;
    if (start < tutorialSteps.length - 1) {
      this.setState(
        {
          start: start + 1
        },
        () => this.changeSlide()
      );
    } else {
      this.setState({
        start:0
      },()=>this.changeSlide())
    }
  }
  prevSlide() {
    let { tutorialSteps, start } = this.state;
    if (start > 0) {
      this.setState(
        {
          start: start - 1
        },
        () => this.changeSlide()
      );
    } else {
      this.setState({
        start:tutorialSteps.length-1
      },()=>this.changeSlide())
    }
  }
  render() {
    let img = this.state.tutorialSteps.map((val, index) => {
      return (
        <div>
          <img
            key={index}
            src={val.imgPath}
            alt=""
            className="img-responsive"
          />
        </div>
      );
    });
    return (
      <div className={css.maindiv}>
        <div className={css.next}></div>
        <div>
          <div className={css.prevdiv}>
            <button onClick={() => this.prevSlide()} className={css.prev}>
              prev slide
            </button>
          </div>
          <Grid item xs={12} className={css.carouselgrid}>
              <img src={this.state.singleImg.imgPath} className={css.img} ></img>
          </Grid>
          <button onClick={() => this.nextSlide()} className={css.next}>
            next slide
          </button>
        </div>
      </div>
    );
  }
}

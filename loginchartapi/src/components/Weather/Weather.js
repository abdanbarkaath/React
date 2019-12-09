import React, { Component } from "react";
import axios from "axios";
import "./weather.css";
import Day from "./Day/Day";
import Week from "./Week/Week";
import ProgressBar from "react-bootstrap/ProgressBar";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      cityCode: "",
      display: 0,
      // now:0,
      show: 0
    };
    this.update = this.update.bind(this);
    this.sendData = this.sendData.bind(this);
    this.goDay = this.goDay.bind(this);
    this.goWeekly = this.goWeekly.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state.now);
  }

  sendData() {
    axios
      .get(
        "http://dataservice.accuweather.com/locations/v1/cities/IN/search?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&q=" +
          this.state.city +
          "&offset=1"
      )
      .then(response => {
        // console.log(response.data[0].Key);
        this.setState({
          cityCode: response.data[0].Key,
          display: 1,
          show: 1
        });
      });
  }

  update(e) {
    this.setState({
      city: e.target.value
    });
    // console.log(e.target.value);
  }
  goDay() {
    this.setState({
      display: 1
      // show:1
    });
  }
  goWeekly() {
    this.setState({
      display: 2,
      show: 1
    });
  }
  render() {
    let display1 = [
      <div>
        <div id="main-back">
          <div id="inside-back">
            <h1>
              <span>
                <img src="https://img.icons8.com/nolan/64/000000/cloud.png"></img>
              </span>
              Weather Api
            </h1>
            <input
              id="getin"
              type="text"
              value={this.state.city}
              onChange={this.update}
            />
            <br></br>
            <button className="btn btn-danger sub" onClick={this.sendData}>
              Get Temperatures
            </button>
            <br />
            <button className="btn btn-success day" onClick={this.goDay}>
              Daily
            </button>
            <button className="btn btn-success hour" onClick={this.goWeekly}>
              Hourly
            </button>
          </div>
          <Day cityCode={this.state.cityCode}></Day>
        </div>
      </div>
    ];
    let display2 = [
      <div>
        <div id="main-back">
          <div id="inside-back">
            <h1>
              <span>
                <img src="https://img.icons8.com/nolan/64/000000/cloud.png"></img>
              </span>
              Weather Api
            </h1>
            <input
              id="getin"
              type="text"
              value={this.state.city}
              onChange={this.update}
            />
            <br></br>
            <button className="btn btn-danger sub" onClick={this.sendData}>
              Get Temperatures
            </button>
            <br />
            <button className="btn btn-success day" onClick={this.goDay}>
              Daily
            </button>
            <button className="btn btn-success hour" onClick={this.goWeekly}>
              Hourly
            </button>
          </div>
          <div className="weeks">
            <Week cityCode={this.state.cityCode}></Week>
          </div>
          {/* <Day  cityCode = {this.state.cityCode}></Day> */}
        </div>
      </div>
    ];
    if (this.state.display === 1) {
      return display1;
    } else if (this.state.display === 2) {
      return display2;
    } else {
      return (
        <div>
          <div id="main-back">
            <div id="inside-back">
              <h1>
                <span>
                  <img src="https://img.icons8.com/nolan/64/000000/cloud.png"></img>
                </span>
                Weather Api
              </h1>
              <input
                id="getin"
                type="text"
                value={this.state.city}
                onChange={this.update}
              />
              <br></br>
              <button className="btn btn-danger sub" onClick={this.sendData}>
                Get Temperatures
              </button>
              <br />
            </div>

            {/* <Day  cityCode = {this.state.cityCode}></Day> */}
            {/* <Week cityCode = {this.state.cityCode}></Week> */}
            {/* <button className="btn btn-success day" v-if="check" onClick="goDay">Daily</button> */}
            {/* <button className="btn btn-success hour" v-if="check" onClick="goHourly">Hourly</button> */}
          </div>
        </div>
      );
    }
  }
}

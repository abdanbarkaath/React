import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import  './day.css'
import ProgressBar from "react-bootstrap/ProgressBar";

export default class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      show:0,
      nows:0
    };
  }
  componentDidMount() {
    this.setState({
      show:1,
      nows:Math.floor(Math.random() * (60 - 20 + 1) + 20),
    })
    axios
      .get(
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
          this.props.cityCode +
          "?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&metric=true"
      )
      .then(response => {
        this.setState({
          show:1,
          nows:30,
        })
        // console.log(response.data.DailyForecasts);
        var val = response.data;
        var xvalues = [];
        var temp = [];
        // console.log(val.DailyForecasts);
        // console.log(val[0].Date);
        val.DailyForecasts.forEach(i => {
          // console.log(i);
          var t = i.Date;
          var z = t.split("T");
          var q = z[0].split("-");
          temp.push(i.Temperature.Maximum.Value);
          xvalues.push(q[2]);
          // console.log(xvalues);
          // console.log(temp);
          this.setState({
              show:1,
              nows:70,
            data: {
              labels: xvalues,
              datasets: [
                { 
                  responsive:false,
                  maintainAspectRatio: false,
                  backgroundColor: "rgba(255,99,132,2)",
                  borderColor: "rgba(255,99,132,2)",
                  borderWidth: 1,
                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                  hoverBorderColor: "rgba(255,99,132,1)",
                  data: temp
                },
              ],
              options: {
                scales: {
                   xAxes: [{ 
                     color:"green",
                    lineWidth: 200,
                  }]
               }
             }
            }
          }
          );
          this.setState({
            show:1,
            nows:100
          })
          // console.log(this.state.data);
        });
        this.setState({
          show:0,
        })
      });
      // setTimeout(()=>{
      //   this.setState({
      //     show:0,
      //   })
      // },600)
  }
  
  render() {
    // console.log("asd", this.state.data);
    let progress
    if(this.state.show === 1){
      progress=<ProgressBar className="disp" animated variant="success" now={this.state.nows} />
    }else{
      progress=''
    }
    return (
      <div>
        {progress}
        {this.state.data.datasets && this.state.data.datasets[0] && this.state.data.datasets[0].data?
        <div className="display">
          <Bar width={1340} height={200} options={{maintainAspectRatio: false}}  data={this.state.data}></Bar>
        </div>
      :''}
      </div>
    );
  }
}

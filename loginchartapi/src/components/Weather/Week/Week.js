import React, { Component } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import './week.css'

export default class Week extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:{},
             height:300
        }
    }
    
    

    componentDidMount(){
        axios
        .get(
          "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" +
            this.props.cityCode +
            "?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&metric=true"
        )
        .then(response => {
            console.log(response.data);
            var val = response.data;
        //   console.log(this.val[0]);
            let temp = [];
            let xvalue = [];
            val.forEach(i => {
            var t = i.DateTime;
            var z = t.split("T")
            var q = z[1].split("+");
            temp.push(i.Temperature.Value);
            xvalue.push(q[0]);
            console.log(temp);
            this.setState({
                data:{
                    labels:xvalue,
                    datasets: [
                      {
                        label: 'My First dataset',
                        fill: true,
                        responsive:false,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        data: temp
                      }
                    ]
                }
            })
          });
        });
    }

    render() {
        // console.log(this.state.data);
        return (
            <div>
                <div className="displays">
                <Line width={1000}  height={200}  data={this.state.data}></Line>           
                </div>
            </div>
        )
    }
}

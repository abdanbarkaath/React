import React, { Component } from 'react'
import './dashboard.css'
import { Line } from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import {Radar} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import {Router,Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      // fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
  ]
};
const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#7952b3',
      borderColor: '#7952b3',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40,20]
    },
    {
      label: 'My Second dataset',
      backgroundColor: '#c3eb67',
      borderColor: '#c3eb67',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [35, 29, 50, 71, 86, 75, 55,60]
    },

  ]
};
const data3 = {
	labels: [
		'Red',
		'Blue',
    'Yellow',
    'Green',
    'Blue'
	],
	datasets: [{
		data: [300, 50, 100,200,500],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    "green",
    "blue"
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		]
	}]
};
const data4 = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};
const data5 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#b0391e',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40,25]
    },
    {
      label: 'My First dataset',
      backgroundColor: '#4d73e8',
      borderColor: 'rgba(73, 113, 235,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(73, 113, 235,0.4)',
      hoverBorderColor: 'rgba(73, 113, 235,1)',
      data: [55, 80, 45, 56, 20, 75, 60,35]
    },
  ]
};
const data6= {
	labels: [
		'Green',
		'Blue',
    'Yellow',
    'Pink'
	],
	datasets: [{
		data: [300, 50, 100, 200],
		backgroundColor: [
		'#27ba33',
		'#36A2EB',
    '#FFCE56',
    '#ba27a4'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
const data7 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(54, 64, 179,0.4)',
      borderColor: 'rgba(54, 64, 179,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(39, 219, 69,0.4)',
      borderColor: 'rgba(39, 219, 69,1)',
      data: [35, 81, 55, 28, 75, 81, 76]
    },
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(219, 39, 75,0.4)',
      borderColor: 'rgba(219, 39, 75,1)',
      data: [81, 45, 68, 35, 67, 79, 81]
    },
  ]
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       x:1
    }
  }
  
  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data
  //   console.log(datasets[0].data);
  // }
    render() {
        return (
            <div id="app">
            <nav className="navbar navbar-expand sticky-top topnav">
              <a className="navbar-brand" routerLink="mobiles">
                <img src="https://img.icons8.com/dusk/40/000000/combo-chart.png"/>
                <span> GraphApi</span>
              </a>
              <div className="navbar-collapse collapse">
                <ul className="navbar-nav pt-1">
                  <li>
                    <form className="form-inline my-2 my-lg-0">
                      <input
                        className="form-control ml-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </li>
                  <li className="nav-item"></li>
                </ul>
              </div>
              <div className="dropdown" id="drp-down">
                <a
                  className="btn btn btn-outline-success dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Options</a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" id="items" >
                  <a className="dropdown-item" >
                    <Link to="/weather">Weather</Link>
                  </a>
                </div>
              </div>
            </nav>
            <div className="sidenav">
              <Link to="/"><img src="https://img.icons8.com/officel/40/000000/home.png"/></Link>
              <Link to="/weather"><img src="https://img.icons8.com/dusk/40/000000/cloud.png"/></Link>
              <Link to="/signup"><img src="https://img.icons8.com/dusk/40/000000/innovation.png"/></Link>
              <Link to="/login"><img src="https://img.icons8.com/dusk/40/000000/contacts.png"/></Link>
            </div>
            <div id="main">
              <div className="container-fluid">
                <div id="info">
                  <h3>Dashboard</h3>
                  <button className="btn btn-outline-primary"><img src="https://img.icons8.com/nolan/26/000000/positive-dynamic.png"/></button>
                  <button className="btn btn-outline-primary"><img src="https://img.icons8.com/color/26/000000/combo-chart.png"/></button>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-lg-6 col1">
                    <div className="card extend extend1">
                      <div className="card-body body1">
                        <Line  width={600} height={275} data={data1} />
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-sm-12 col-lg-6 col2">
                    <div className="card extend extend2">
                      <div className="card-body body2">
                        <HorizontalBar width={600} height={275} data={data2} />
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-sm-12 col-lg-3 col3">
                    <div className="card extend extend3">
                      <div className="card-body body3">
                      <Pie width={380} height={320}data={data3} />
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col4">
                    <div className="card extend extend4">
                      <div className="card-body body4">
                      <Radar width={260} height={195} data={data4} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col5">
                    <div className="card extend extend5">
                      <div className="card-body body5">
                      <Bar data={data5} width={350} height={350} ></Bar>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col6">
                    <div className="card extend extend6">
                      <div className="card-body body6">
                      <Doughnut  width={380} height={320} data={data6} />
                        {/* <highcharts></highcharts>  */}
                        {/* // :options="chart1Options"></highcharts> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-12 col7">
                    <div className="card extend extend7">
                      <div className="card-body body7">
                      <Line width={380} height={90} data={data7} />
                        {/* <highcharts></highcharts>  */}
                        {/* // :options="chart4Options"></highcharts> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

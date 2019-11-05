import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Child1 from './Child1'
import Child2 from './Child2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { Component } from 'react'

export default class Parent extends Component {
    notify(){
        toast("hahah")
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <button onClick={this.notify}>click me</button>
                <ToastContainer hideProgressBar={true} ></ToastContainer>
            </div>
        )
    }
}


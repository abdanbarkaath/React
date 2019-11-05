import React, { Component } from "react";
import "./login.css";
import {Link,Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x:true,
      name:"",
      password:""
    };
    this.enable = this.enable.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  enable(e){
    if(e.target.placeholder === "Name"){
      this.setState({
        name:e.target.value
      })
    }else{
      this.setState({
        password:e.target.value
      })
    }
    if(this.state.name && this.state.password){
      this.setState({
        x:false
      })
    }
  }

  checkUser(e){
    e.preventDefault()
    var i = 0;
    var values = JSON.parse(localStorage.getItem("users"));
    // console.log(values);
    values.forEach(x => {
      if (
        x.name == this.state.name &&
        x.password == this.state.password
      ) {
        console.log("loged in");
        // alert("logged in");
        i = 1;
        toast.success("Logging in !", {
          position: toast.POSITION.TOP_CENTER,
          onClose:()=>{
            this.props.history.push('/dashboard');
          }
        });
      }
    });
    if (i === 0) {
      toast.error("Check username or password !", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  render() {
    return (
      <div id="back">
        <ToastContainer hideProgressBar={true} autoClose={2000}></ToastContainer>
        <div className="login">
          <form id="forms">
            <div id="login-back">
              <img
                id="lock"
                src="https://img.icons8.com/ios/70/000000/lock.png"
              />
              <div id="login-dash">
                <h2>Login</h2>
                <p>login to go to the dashboard</p>
              </div>
            </div>
            <div className="form-group">
              <label id="lab">
                <img src="https://img.icons8.com/pastel-glyph/25/000000/user-male--v1.png" />
                Name
              </label>
              <input
                type="name"
                className="form-control"
                onChange={this.enable}
                value={this.state.name}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label id="lab">
                <img src="https://img.icons8.com/material-sharp/20/000000/visible.png" />
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={this.enable}                
                value={this.state.password}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button
                id="login"
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={this.state.x}
                onClick={this.checkUser}
              >
                <img src="https://img.icons8.com/ios/20/000000/lock.png" />
                Login
              </button>
            </div>
            <hr />>
            <div className="hint-text">
              Want to create an account?
              <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

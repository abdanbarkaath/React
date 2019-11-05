import React, { Component } from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:true,
             name:"",
             email:"",
             number:"",
             password:"",
             passwordagain:"",
             check: {
              name: /^[A-Za-z.0-9]{3,30}$/,
              number: /^([0-9]{10})$/g,
              email: /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/
            }

        }
        this.enable = this.enable.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    
    enable(e){
      if(e.target.placeholder === "Name"){
        this.setState({
          name:e.target.value
        })
      }else if(e.target.placeholder ==="Email"){
        this.setState({
          email:e.target.value
        })
      }else if(e.target.placeholder ==="Number"){
        this.setState({
          number:e.target.value
        })
      }else if(e.target.placeholder ==="Password"){
        this.setState({
          password:e.target.value
        })
      }else{
        this.setState({
          passwordagain:e.target.value
        })
      }
      if(this.state.name && this.state.email && this.state.number && this.state.password && this.state.passwordagain){
        this.setState({
          x:false
        })
      }
    }

    addUser(e){
      e.preventDefault();
      var userObj = {
        name :this.state.name,
        email :this.state.email,
        number :this.state.number,
        password :this.state.password,
        passwordagain :this.state.passwordagain,
      }
      var serialize;
      var users = JSON.parse(localStorage.getItem("users")) || [];
      var i = 1;
      if (this.state.check.name.test(userObj.name)) {
        console.log("correct name");
        i = 1;
        if (this.state.check.email.test(userObj.email)) {
          console.log("correct email");
          i = 1;
          if (this.state.check.number.test(userObj.number)) {
            console.log("correct number");
            i = 1;
            users.forEach(x => {
              if (
                x.name == userObj.name ||
                x.email == userObj.email
              ) {
                toast.error("User already exists !", {
                  position: toast.POSITION.TOP_CENTER
                });
                i = 0;
              } else {
              }
            });
            if (userObj.password !== userObj.passwordagain) {
              toast.error("Passwords don't match !", {
                position: toast.POSITION.TOP_CENTER
              });
              i = 0;
            } else {
              if (i == 1) {
                users.push(userObj);
                serialize = JSON.stringify(users);
                localStorage.setItem("users", serialize);
                toast.success("New User Registered !", {
                  position: toast.POSITION.TOP_CENTER,
                  onClose:()=>{
                    this.props.history.push("/login")
                  },
                });
              }
            }
          } else {
            toast.error("Wrong number !", {
              position: toast.POSITION.TOP_CENTER
            });
            console.log(userObj.number);
          }
        } else {
          toast.error("Wrong email !", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      } else {
        toast.error("Wrong user name !", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }



    render() {
        return (
          <div id="back">
          <ToastContainer hideProgressBar={true} autoClose={3000}></ToastContainer>
            <div className="signup">
              <form id="forms">
                <div id="sign-back">
                  <img id="pen" src="https://img.icons8.com/ios/50/000000/edit.png" />
                  <h2>Sign Up</h2>
                  <p >Please fill in this form to create an account!</p>
                </div>
                <div className="form-group">
                  <label id="lab"><img src="https://img.icons8.com/pastel-glyph/25/000000/user-male--v1.png"/> Signup as</label>
                  <input
                    type="name"
                    onChange={this.enable}
                    className="form-control"
                    value={this.state.name}
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label id="lab"><img src="https://img.icons8.com/ios-glyphs/20/000000/email.png"/> Email</label>
                  <input
                    type="email"
                    onChange={this.enable}
                    className="form-control"
                    value={this.state.email}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label id="lab"><img src="https://img.icons8.com/material-sharp/20/000000/number-pad.png"/> Phone Number</label>
                  <input
                    type="number"
                    onChange={this.enable}
                    className="form-control"
                    value={this.state.number}
                    placeholder="Number"
                  />
                </div>
                <div className="form-group">
                  <label id="lab"><img src="https://img.icons8.com/material-sharp/20/000000/visible.png"/> Password</label>
                  <input
                    type="password"
                    onChange={this.enable}
                    className="form-control"
                    value={this.state.password}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label id="lab"> <img src="https://img.icons8.com/material-sharp/20/000000/visible.png"/> Repeat Password</label>
                  <input
                    type="password"
                    onChange={this.enable}
                    className="form-control"
                    value={this.state.passwordagain}
                    placeholder="Passwordagain"
                  />
                </div>
        
                <div className="form-group">
                  <button id="sign-up" className="btn btn-primary btn-lg" 
                  disabled={this.state.x}
                   onClick={this.addUser}>
                    <img src="https://img.icons8.com/ios/20/000000/edit.png" /> Sign Up
                  </button>
                </div>
                <div className="hint-text">
                  Already have an account?
                  <Link to="/login">Login here</Link>
                </div>
              </form>
            </div>
          </div>
        )
    }
}

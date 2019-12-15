import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import style from "./User.module.css";

export default class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      info: {
        thing: "",
        done: false
      }
    };
  }

  update = e => {
    e.persist();
    if (e.key === "Enter") {
      this.addTodo();
      this.setState({
        info: {
          thing: "",
          done: false
        }
      });
    } else {
      this.setState({
        info: {
          thing: e.target.value,
          done: false
        }
      });
    }
  };

  addTodo = () => {
    this.state.todos.push(this.state.info);
  };

  show(index){
    //   let { todos } = this.state;
    let tempArr = [...this.state.todos]
    tempArr[index].done = !tempArr[index].done;
    this.setState({
        todos:tempArr
    })
  }

  render() {
    let { info, todos } = this.state;
    let lists = todos.map((val, index) => (
        <li key={index} className={style.litype}>
          <span className={todos[index].done?'style.textflowhidden':'style.textflow'}> {val.thing}</span>
          <Button onClick={()=>this.show(index)} className={style.xbtn} variant="contained" color="secondary">
            X
          </Button>
        </li>
    ));
    return (
      <div>
        <div className={style.inputDiv}>
          <Input
            type="text"
            value={info.thing}
            onKeyUp={this.update}
            onChange={this.update}
            className={style.inputBox}
          ></Input>
          <Button variant="contained" color="primary" onClick={this.addTodo}>
            add to todo list
          </Button>
        </div>
        <div className={style.listBody}>
            <ul className={style.ultype}>{lists}</ul>
        </div>
      </div>
    );
  }
}

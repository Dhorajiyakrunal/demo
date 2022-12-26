import logo from './logo.svg';
import './App.css';
// import data from './data.json';
import { useState } from 'react';
import About from './pages/about';
import Home from './pages/home';
import React, { Component } from 'react'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "krunal",
      email: "kd@gmail.com",
      phone: 9879672033,
      student: {
        name: "admin",
        email: "admin@gamil.com",
        phone: 8799693691
      },
      isvaild : true
    }
  }
  render() {
    const onclickhandler=()=>{
      this.setState({name : "rushubh",email :'rs@gmail.com',phone:59595959,student:{name:"admin2"},isvaild : this.state.isvaild ?false : true })
    }
    return (
    <div className='App'>
        Name is {this.state.name} <br/>
        email is {this.state.email} <br/>
        phone is {this.state.phone}<br/>
        student name is {this.state.student.name}<br/>
        isvaild {this.state.isvaild ? 'yes' : 'no'}
        {/* student name = {this.state.student.name} */}
        <button onClick={onclickhandler}>Click</button>
      </div>
    )
  }
}
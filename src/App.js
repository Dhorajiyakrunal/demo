import React, { Component } from 'react'

export default class App extends Component {

  componentWillMount (){
    console.log("Code Checking Run Run");
    this.setState({count : this.state.count +1})
  }

  // componentDidUpdate(){
  //   console.log("Update run");
  // }


  componentDidUpdate(prevProps,prevState){
    console.log("Upadte Checking");
    if(prevState.count !== this.state.count){
      this.setState({data :"Hii"})
    }
  }
  
  constructor(props){
    super(props);
    console.log("run");
    this.state = {
      count : 1,
      data : null
    }
  }

  onclickupdate=()=>{
    this.setState({count : this.state.count +1})
  }

  render() {
    return (
      <div>
       Number is {this.state.count}
       <button onClick={this.onclickupdate}>Upadate</button>
      </div>
    )
  }
}

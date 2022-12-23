import { Component } from 'react';
import Home from './home'

export default class about extends Component {
  render() {
    // console.log(this.id);
    return (
      <div>
        id =  {this.props.data.id}<br/>
        <Home data={data}  />
      </div>
    )
  }
}

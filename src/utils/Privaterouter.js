import React from 'react'
import {Navigate} from "react-router-dom";

const Privaterouter = (props) => {

  if(!JSON.parse(localStorage.getItem('admin'))?.email){
    return  <Navigate to="/login"/>
  }

  return (
    <div>
      {props.children}
    </div>
  )
}

export default Privaterouter

import React from 'react'
import { Navigate } from 'react-router-dom'

const Adminrouter = (props) => {

    if(!JSON.parse(localStorage.getItem('admin'))?.email||JSON.parse(localStorage.getItem('admin')).role !== 'admin')
    {
      return <Navigate to="/login"/>
    }

  return (
    <div>
      {props.children}
    </div>
  )
}

export default Adminrouter

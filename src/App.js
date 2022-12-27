import logo from './logo.svg';
import './App.css';
// import data from './data.json';
import { useState } from 'react';
import About from './pages/about';
import Home from './pages/home';
import React, { userEffect, userState } from 'react'

export const App = () => {

  const [name, setName] = useState('admin')


  useState(() => {
    console.log('userEffect run');
    setName('admin2')
  }, [])
  return (
    <div>
      name is {name}
    </div>
  )
}


export default App

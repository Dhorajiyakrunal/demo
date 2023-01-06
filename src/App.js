import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Department from './pages/departments'
import Doctors from './pages/doctors'
import About from './pages/about'
import Contact from './pages/contect'
import Appotment from './pages/appotment'
import Layout from './component/layout'
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/department' element={<Layout><Department /></Layout>} />
        <Route path='/doctors' element={<Layout><Doctors/></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/contact' element={<Layout><Contact /></Layout>} />
        <Route path='/appotment' element={<Appotment />} />
      </Routes>
    </div>
  )
}

export default App







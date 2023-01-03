import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Department from './pages/departments'
import Doctors from './pages/doctors'
import About from './pages/about'
import Contact from './pages/contect'
import Header from './component/header'
import Appotment from './pages/appotment'
import Footer from './component/footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/department' element={<Department/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/appotment' element={<Appotment/>}/>
      </Routes>
      <Footer/>
    </div>


  )
}

export default App






import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Department from './pages/Departments'
import Doctors from './pages/doctors'
import About from './pages/about'
import Contact from './pages/contect'
import Appointment from './pages/appointment'
import Login from './pages/login'
import Layout from './component/layout'
import Form from "./pages/doctorsForm";
import Register from "./pages/register"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/department' element={<Layout><Department /></Layout>} />
        <Route path='/doctors' element={<Layout><Doctors/></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/contact' element={<Layout><Contact /></Layout>} />
        <Route path='/appointment' element={<Layout><Appointment /></Layout>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/dform' element={<Form/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}
export default App















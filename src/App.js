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
import Privaterouter from './utils/Privaterouter'
import UpdateaMedicine from'./pages/UpdateaMedicine'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/department' element={<Privaterouter><Layout><Department /></Layout></Privaterouter>} />
        <Route path='/doctors' element={<Layout><Doctors/></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/contact' element={<Privaterouter><Layout><Contact /></Layout></Privaterouter>} />
        <Route path='/updateamedicine' element={<Privaterouter><Layout><UpdateaMedicine /></Layout></Privaterouter>} />
        <Route path='/appointment' element={<Layout><Appointment /></Layout>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/dform' element={<Form/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}
export default App















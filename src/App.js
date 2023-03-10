import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Department from './pages/Departments'
import Doctors from './pages/doctors'
import About from './pages/about'
import Contact from './pages/contect'
import Appointment from './pages/AddAppointment'
import Login from './pages/login'
import Layout from './component/layout'
import Form from "./pages/doctorsForm";
import Register from "./pages/register"
import Privaterouter from './utils/Privaterouter'
import UpdateaMedicine from'./pages/UpdateaMedicine'
import Adminrouter from './utils/Adminrouter'
import Listappointment from './pages/Listappointment'
import Doctormain from './pages/Doctormain'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/department' element={<Adminrouter><Layout><Department /></Layout></Adminrouter>} />
        <Route path='/doctors' element={<Layout><Doctors/></Layout>} />
        <Route path='/maindoctors/:id' element={<Layout><Doctormain/></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/contact' element={<Adminrouter><Layout><Contact /></Layout></Adminrouter>} />
        <Route path='/updateamedicine' element={<Privaterouter><Layout><UpdateaMedicine /></Layout></Privaterouter>} />
        <Route path='/appointment' element={<Layout><Appointment /></Layout>} />
        <Route path='/listappointment' element={<Adminrouter><Layout><Listappointment/></Layout></Adminrouter>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dform' element={<Form/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}
export default App















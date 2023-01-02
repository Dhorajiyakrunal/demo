import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


const App = () => {
  return (
    <div className='app'>
      <div className='d-flex'>
        <div className='logo'>
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul className='d-flex mx-2'>
            <li className='me-5'><Link>Home</Link></li>
            <li>About</li>
          </ul>
        </nav>
        <Alert  variant='success'>
          This is a  alert—check it out!
        </Alert>
        <Button>Toggle</Button>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App






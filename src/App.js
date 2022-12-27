// // import logo from './logo.svg';
// // import './App.css';
// // // import data from './data.json';
// // import About from './pages/about';
// // import Home from './pages/home';
// import React, { useEffect, useState } from 'react'

// export const App = () => {

//   const [name, setName] = useState('admin')

//   useEffect(()=>{
//     alert('run');
//     setName('admin2')
//   },[])

//   // useEffect((),[])


//   return (
//     <div>
//       name is {name}
//     </div>
//   )
// }


// export default App


//updating

// import React,{ useEffect,useState } from "react";

// export default function App() {

//   const [name , setName] = useState('krunal')
//   useEffect(()=>{
//   },[name])


//   return (
//     <div>
//       name is {name}
//       <button onClick={()=>setName('admin')}>Submit</button>
//     </div>
//   )
// }


// unmounting

// import React,{ useEffect, useState } from 'react'


// export default function App() {

//   const [name, setName] = useState()

//   useEffect(() => {
//     return () => {
//       alert("Are you sure")
//     }
//   }, [])

//   return (
//     <div>
//       name is {name}
//       <button onClick={() => setName('admin')}>Submit</button>
//     </div>
//   )
// }



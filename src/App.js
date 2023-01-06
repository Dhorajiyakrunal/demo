import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Department from './pages/departments'
import Doctors from './pages/doctors'
import About from './pages/about'
import Contact from './pages/contect'
// import Header from './component/header'
import Appotment from './pages/appotment'
import Layout from './component/layout'
// import Footer from './component/footer'
import './App.css';

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/department' element={<Layout><Department /></Layout>} />
        <Route path='/doctors' element={<Layout><Doctors/></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/contact' element={<Layout><Contact /></Layout>} />
        <Route path='/appotment' element={<Appotment />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App


// import React from 'react'
// const App = () => {

//   const items = [
//     {
//       id: 1,
//       name: "Product 1",
//       quantity: 2,
//       price: 10.99,
//       options: [
//         {
//           color: "red"
//         },
//         {
//           size: "large"
//         }
//       ]
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       quantity: 1,
//       price: 29.99,
//       options: [
//         {
//           color: "blue"
//         },
//         {
//           size: "small"
//         }
//       ]
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       quantity: 3,
//       price: 5.99,
//       options: [
//         {
//           color: "green"
//         },
//         {
//           size: "medium"
//         }
//       ]
//     }
//   ]

//   const array = items.reduce((a,b)=>{
//     return a=a+(b.quantity*b.price)
//   },0)


//   return (
//     <div>
//       <table border={1}>
//         <tbody >
//           <tr>
//             <th>id</th>
//             <th>name</th>
//             <th>quantity</th>
//             <th>price</th>
//             <th>color</th>
//             <th>size</th>
//             <th>Total</th>
//           </tr>
//           {items.map((i) => {
//             return (
//               <tr key={Math.random()}>
//                 <td>{i.id}</td>
//                 <td>{i.name}</td>
//                 <td>{i.quantity}</td>
//                 <td>{i.price}</td>
//                 {i.options.map((j)=>{
//                   return(
//                     <td key={Math.random()}>{j.color}{j.size}</td>
//                   )
//                 })}
//                 <td>{i.quantity*i.price}</td>
//               </tr>
//             )
//           })}
//           <tr>
//             <td colSpan={6}></td>
//             <td >{array}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default App


// import React, { useState, useEffect } from "react";
// import './App.css';


// function App() {

//   const [count, setcount] = useState(1)

//   useEffect(() => {
 
//   }, [count])

//   return (
//     <div className="App">
//       <button onClick={()=>setcount(count + 1)}>+</button>
//       {count}
//       <button onClick={()=>setcount(count - 1)}>-</button>
//     </div>
//   )
// }

// export default App




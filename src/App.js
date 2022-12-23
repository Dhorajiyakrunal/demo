import logo from './logo.svg';
import './App.css';
// import data from './data.json';
import { useState } from 'react';
import About from './pages/about';
import Home from './pages/home';
function App() {

  const data={
      "id":"1",
      "color":"red",
      "value":"#f00"
    }
    // {
    //   "id": "2",
    //   "color": "green",
    //   "value": "#0f0"
    // },
    // {
    //   "id": "3",
    //   "color": "blue",
    //   "value": "#00f"
    // }
  

  // const onclickstate = () => {
  //   //  setAdd(add + 1)

    
  //   setArray(array)
  //   // console.log(obj2);
  // }

  // const 


  return (
    <div className="App">
      <header className="App-header">
        {/* Plus {add} */}
        {/* Color is {obj.color} */}
        {/* {array.map((i)=>{
          return <div>
            color is {i.color}
          </div>
        })} 
        <button onClick={onclickstate}>+</button> */}
        <About data={data}/>
        {/* <Home data={data} color="color"/> */}
      </header>
    </div>
  );




}

export default App;

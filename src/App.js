import React, {useState } from 'react'

export const App = () => {
  return (
    <div className='hocred'>
      <Hocred component={Counter}/>
    </div>
  )
}

export const Hocred = (props) => {
  return (
    <div style={{backgroundColor:'red'}}>
      <h1 >Hocred</h1>
      <props.component/>
    </div>
  )
}



export default App

const Counter = () => {
  const [count, setCount] = useState(0)

  const onclickhandl =()=>{
    setCount (count + 1)
  }
  
  return (
    <div>
      this is {count}
      <button onClick={onclickhandl}>Button</button>
    </div>
  )
}






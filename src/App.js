import React, { useState, useEffect } from "react";


function App() {

  const [count, setcount] = useState(1)

  useEffect(() => {

  }, [count])

  return (
    <div className="App">
      {count}
      <button onClick={()=>setcount(count + 1)}>+</button>
      <button onClick={()=>setcount(count - 1)}>-</button>
    </div>
  )
}

export default App






import React from 'react'

const home = (props) => {
  console.log("id", props.data);

  return (
    <div>
      home = {props.data.color}
    </div>
  )

}

export default home

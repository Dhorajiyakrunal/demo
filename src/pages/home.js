import React from 'react'

const home = (props) => {
  console.log("id", props.data);

  return (
    <div>
      home = {props.data.name}
    </div>
  )

}

export default home

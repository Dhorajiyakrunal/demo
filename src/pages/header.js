import React from 'react'

function header(props) {
  return (
    <div>
      Medicin Expiry {props.data.expiry}
    </div>
  )
}

export default header

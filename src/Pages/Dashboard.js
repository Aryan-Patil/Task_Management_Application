import React from 'react'

function Dashboard(props) {
  return (
    <div>{props.name}
    <button onClick={()=>{props.setX('');}}>logout</button>
    </div>
  )
}

export default Dashboard
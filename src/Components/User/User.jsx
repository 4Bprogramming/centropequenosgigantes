import React from 'react'


function User(props) {
  return (
    <div>

    <h2>{props.name ? `Bienvenido - ${props.name}` : "Login please"}</h2>
  </div>
  )
}

export default User
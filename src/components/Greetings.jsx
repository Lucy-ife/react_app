import React from 'react'

const Greetings = (props) => {
  return (
    <div>Hello {props.name}!</div>
  )
}

function StatusMessage({isLoggedIn}) {
    return(
        <div>
            {isLoggedIn ? "Welcome back!" : "Please sign up."}
        </div>
    )
}




export default Greetings
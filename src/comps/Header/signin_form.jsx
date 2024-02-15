import React from 'react'
import {Link} from "react-router-dom"
const Signin_form = () => {
  return (
    <>

       <form id = "button_form">
                <ul>
                <Link to = "/ChatAppUi/entry"><li>Start Chatting</li></Link>
                </ul>
       </form>
    </>
  )
}

export default Signin_form
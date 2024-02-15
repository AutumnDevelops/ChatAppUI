import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <nav>
    <div>
        <Link to = "/ChatAppUi/"><h1><span>Ω</span>MEGA</h1></Link>
        <h3>Talk to Strangers :)</h3>
    </div>

    <div id = "nav_class">
        <h2><span>10,000+</span> Online now!</h2>
    </div>
    </nav>
  )
}

export default Nav
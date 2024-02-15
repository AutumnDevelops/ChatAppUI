import React, {useState} from 'react'
import {Link} from "react-router-dom";
const Entry_form = () =>{
  return (
        <form>
            <label>Name</label>
              <input type = "text" placeholder = "e.g. 'Bob'" required />
            <label>
              Some interests
              <span>Sepperate by "," or "|"</span>
            </label>
              <input type = "textarea" placeholder = "e.g. 'work, anime'" />
              <Link to = "/ChatAppUi/chat"><button id="submit_button" >Submit</button></Link>
           </form>
  )
}


export default Entry_form
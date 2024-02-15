import React from 'react'
import { FaHome } from "react-icons/fa";
const Form = () => {
  return (
    <form>
           <input type = "text" placeholder = "type your message" />
           <div id = "button_box">
                <button>
                    <span>Send</span>
                    <span id = "subText">Enter</span>
                </button>
                <button>
                    Disconnect
                    <span id = "subText">Enter + /</span>
                </button>
           </div>
    </form>
  )
}

export default Form
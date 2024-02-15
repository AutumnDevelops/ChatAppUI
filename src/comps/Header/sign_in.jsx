import React from 'react'
import Signin_form from "./signin_form"
import { IoIosWarning } from "react-icons/io";
const Sign_in = () => {
  return (
    <section id = "main_signin">
        <span id = "warning_txt"><i><IoIosWarning /></i> Eget nunc lobortis mattis<i><IoIosWarning /></i></span>
            <Signin_form />
    </section>
  )
}

export default Sign_in
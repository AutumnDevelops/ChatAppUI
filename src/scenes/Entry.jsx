import React from 'react'
import Entry_form from '../comps/sign_up/entry_form'
const Entry = () => {
  return (
  <>
    <section  id = "entry_form" style = {{zIndex:60}}>
       <h3>Please enter the following and you will be re-directed to a random room</h3>
          <Entry_form />
    </section>
    <div className = "bg_wrapper" style = {{position: "absolute", bottom:0, opacity: "70%", zIndex: 40}}>
    </div>
  </>
  )
}

export default Entry
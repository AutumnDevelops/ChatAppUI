import React from 'react'
import Chat_box from "./../comps/chat/chat_box"
import Form from "./../comps/chat/Form";
import BG from "../comps/background/BG";
const Chat = () => {
  return (
    <section id = "chat_page">
        <div id = "chat_area">
          <Chat_box/>
          <Form/>
        </div>
    </section>
  )
}

export default Chat
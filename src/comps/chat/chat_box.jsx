import React from 'react'
import { GoAlertFill } from "react-icons/go";
import Recieved from "../../comps/chat/recieved"
import Sent from "../../comps/chat/sent"
const Chat_box = () => {
  return (
    <>
        <h3>Chat Area</h3>
        <div id = "alert_chat">
            <div>
                <p>You are chatting with a random stranger, say hi!</p>
                <p>Your shared interests: "Anime, Programming"</p>
            </div>
        </div>

        <div id  = "chatBoxArea">
            <Recieved />
            <Sent />
        </div>
    </>
  )
}

export default Chat_box
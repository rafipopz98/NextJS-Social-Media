"use client";
import React, { useState } from "react";
import "./Chat.css";
const page = ( ) => {
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <input type="text" />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {/* {chats.map((chat) => ( */}
            <div
              onClick={() => {
                setCurrentChat(chat);
              }}
            >
              {/* <Conversation */}
              {/* data={chat} */}
              {/* currentUser={user._id} */}
              {/* online={checkOnlineStatus(chat)} */}
              {/* /> */}
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          {/* <NavIcons /> */}
        </div>
        {/* <ChatBox */}
        {/* chat={currentChat} */}
        {/* currentUser={user._id} */}
        {/* setSendMessage={setSendMessage} */}
        {/* receivedMessage={receivedMessage} */}
        {/* /> */}
        jli
      </div>
    </div>
  );
};

export default page;

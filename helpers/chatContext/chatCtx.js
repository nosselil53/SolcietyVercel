import React, { useState, useEffect } from 'react';
import Context from './index';
const ChatProvider = (props) => {
  const [toggleSmallSide, setToggleSmallSide] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [chatMembers, setChatMembers] = useState([]);
  const [chats, setChats] = useState([]);
  const currentUserId = 0;
  const [selectedUser, setSelectedUser] = useState({
    id: 0,
    name: 'Jony Lynetin',
    thumb: 'contact/2.jpg',
    status: '8',
    mesg: 'Typing................',
    lastSeenDate: '30/11/19',
    onlineStatus: 'online',
    typing: true,
  });
  const [isTyeping, setIsTypeing] = useState(false);



  // send message to selected chat users
  const sendMessage = (
    currentUserId,
    selectedUserId,
    messageInput,
    image,
    chats
  ) => {
    let chat = chats?.find(
      (x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId)
    ); // find selected chat User Id
    const now = new Date();
    const time = now.getHours() + ':' + now.getMinutes();
    if (chat) {
      chat.messages.push({
        sender: currentUserId,
        time: time,
        text: messageInput,
        stickers: image,
        status: true,
      });
      chat.lastMessageTime = time;
      let chats_data = chats.filter((x) => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      const selectedUser = chatMembers.find((x) => x.id === selectedUserId);
      setChats([...chats]); // update chats messages
      setSelectedUser(selectedUser);
    }
  };

  // reply message to selected chat users
  const replyMessage = (currentUserId, selectedUserId, replyMessage, chats) => {
    let chat = chats.find(
      (x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId)
    ); // find selected chat User Id
    const now = new Date();
    const time = now.getHours() + ':' + now.getMinutes();
    if (chat) {
      chat.messages.push({
        sender: selectedUserId,
        time: time,
        text: replyMessage,
        read: true,
      });
      chat.lastMessageTime = time;
      chat.online = '';
      let chats_data = chats.filter((x) => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      const selectedUser = chatMembers.find((x) => x.id === selectedUserId);
      selectedUser.onlineStatus = 'online'; // chat user reply the message then set selected chat user  status to "online"
      setChats([...chats]); // update chats messages
      setSelectedUser(selectedUser);
    }
  };

  // when chat user replied to our message existing tyeping loader
  const typingMessage = (typeing) => {
    setIsTypeing(typeing);
  };

  //toggle right sidebar In and Out on cLick
  const OpenAppSidebar = (rside) => {
    if (rside) {
      setToggleSmallSide(!rside);
      document.querySelector('.chitchat-main').classList.add('small-sidebar');
    
      document.body.className = ` ${localStorage.getItem(
        'layout_mode'
      )}`;
    } else {
      setToggleSmallSide(!rside);
      document
        .querySelector('.chitchat-main')
        .classList.remove('small-sidebar');

      document.body.className = `main-page ${localStorage.getItem(
        'layout_mode'
      )}`;
    }
  };

  const CloseAppSidebar = (rside) => {
    setToggleSmallSide(!rside);
    document.querySelector('.chitchat-main').classList.remove('small-sidebar');
    document.querySelector('.app-sidebar').classList.remove('active');
    document.body.className = `main-page ${localStorage.getItem(
      'layout_mode'
    )}`;
  };

  //set responsive in messenger page
  const handleClickRight = (response) => {
    if (response) {
      setMobileMenu(!response);
      document.querySelector('.sidebar-toggle').classList.add('mobile-menu');
    } else {
      setMobileMenu(!response);
      document.querySelector('.sidebar-toggle').classList.remove('mobile-menu');
    }
  };

  return (
    <Context.Provider
      value={{
        profileToggle: profileToggle,
        setProfileToggle: setProfileToggle,
        toggleSmallSide: toggleSmallSide,
        CloseAppSidebar: CloseAppSidebar,
        OpenAppSidebar: OpenAppSidebar,
        mobileMenu: mobileMenu,
        handleClickRight: handleClickRight,
        chatMembers: chatMembers,
        chats: chats,
        currentUser: chatMembers[0],
        selectedUser: selectedUser,
        isTyeping: isTyeping,
      
     
        sendMessage: sendMessage,
        replyMessage: replyMessage,
        typingMessage: typingMessage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ChatProvider;

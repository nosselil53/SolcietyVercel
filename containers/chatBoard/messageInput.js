import { useEffect, useState, useContext, useRef } from 'react';
import {

  BarChart2,
  Paperclip,
  Send,
} from 'react-feather';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Dropdown,
  DropdownToggle,
  Button,
} from 'reactstrap';
import ChatContext from '../../helpers/chatContext';
import axios from 'axios';

const MessageInput = (props) => {
  const chatCtx = useContext(ChatContext);
  const chats = chatCtx.chats;
  const currentUser = chatCtx.currentUser;
  const selectedUser = chatCtx.selectedUser;
  const sendMessage = chatCtx.sendMessage;
  const replyMessage = chatCtx.replyMessage;
  const typingMessage = chatCtx.typingMessage;
  const [stickers, setStickers] = useState([]);
  const [sticker, setSticker] = useState(false);
  const [contactpoll, setContactpoll] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [snippetModal, setSnippetModal] = useState(false);
  const [pollModal, setPollModal] = useState(false);

  const toggleSnippetModal = () => {
    setSnippetModal(!snippetModal);
    setContactpoll(false);
  };
  const togglePollModal = () => {
    setPollModal(!pollModal);
    setContactpoll(false);
  };

  useEffect(() => {

    axios.get('/api/sticker.json').then((res) => setStickers(res.data));
  }, []);

  const selcectedStickers = (stic) => {
    var container = document.querySelector('.messages');
    setTimeout(function () {
      container.scrollBy({ top: 400, behavior: 'smooth' });
    }, 310);
    let currentUserId = currentUser.id;
    let selectedUserId = selectedUser.id;
    let selectedUserName = selectedUser.name;
    sendMessage(currentUserId, selectedUserId, '', stic, chats);
    setSticker(false);
  };

  const hideAndShowContactPoll = (contpoll) => {
    setSticker(false);
    setContactpoll(!contpoll);
  };

  

  const handleMessageChange = (message) => {
    setMessageInput(message);
  };

  const handleMessagePress = (e) => {
    if (e.key === 'Enter' || e === 'send') {
      var container = document.querySelector('.messages');
      setTimeout(function () {
        container.scrollBy({ top: 200, behavior: 'smooth' });
      }, 310);
      
      
  };

  const handleNoMessageSend = (e) => {
    if (e.key === 'Enter' || e === 'send') {
      if (messageInput.length > 0) {
        setMessageInput('');
      }
    }
  };
  }
  return (
    <div className='message-input'>
      <div className='wrap emojis-main'>
        

      
        <input
          className='setemoj'
          value={messageInput}
          type='text'
          placeholder='Write your message...'
        
          onChange={(e) => handleMessageChange(e.target.value)}
        />
       
      
        <button
          className={`submit icon-btn btn-primary `}
        
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;


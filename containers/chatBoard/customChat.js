import { useContext, useEffect, useState, useRef } from 'react';
import { io } from "socket.io-client"
const socket = io("http://localhost:8081",{transports: ['websocket']})

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import {

  Phone,
  Video,

  Trash2,
  Slash,
  MoreVertical,
  
  Send,
} from 'react-feather';
import ChatContext from '../../helpers/chatContext';
import { Tooltip } from 'react-tippy';


const CustomChat = (props) => {
  const [volum, setVolum] = useState(true);
  const [search, setSearch] = useState(false);
  const [audiocall, setAudiocall] = useState(false);
  const [audioreceivecall, setAudioreceivecall] = useState(false);
  const [videocall, setVideocall] = useState(false);
  const [videoscreen, setVideoScreen] = useState(false);
 
  const chatCtx = useContext(ChatContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [blockModal, setBlockModal] = useState(false);


  const chatMembers = chatCtx.chatMembers;
  const chats = chatCtx.chats;

  const selectedUser = chatCtx.selectedUser;
  const isTyeping = chatCtx.isTyeping;
  const typingMessage = chatCtx.typingMessage;
  
  const toggleAudiocall = () => {
    setAudiocall(!audiocall);
  };
  const toggleVideocall = () => {
    setVideocall(!videocall);
  };
  const toggleAudioReceiveCall = () => {
    setAudioreceivecall(!audioreceivecall);
  };

  const AudioReceiveCall = async () => {
    setAudioreceivecall(true);
    setAudiocall(false);
  };
  //soket.io
   const[chat, setChat] =useState("")
  
  const[list, setList] =useState([])
  const handlepost =(e) =>{
    
   
    socket.emit("roomstatus", {id :socket.id, chatText : chat})
  }
  socket.on("send",(data)=>{
    setList([...list,data])
  })

  const profileSideBarToggle = (toggle) => {
    if (toggle) {
      document.body.className = ` main-page menu-active ${localStorage.getItem(
        'layout_mode'
      )}`;
      // document
      //   .querySelector('.chitchat-main')
      //   .classList.remove('small-sidebar');
      document.querySelector('.chitchat-main').classList.add('small-sidebar');
  
      setProfileToggle(toggle);
      props.setQuickAction(false);
    } else {
      document.body.className = ` main-page ${localStorage.getItem(
        'layout_mode'
      )}`;
      document.querySelector('.chitchat-main').classList.add('small-sidebar');
     
      setProfileToggle(toggle);
    }
  };

  const refreshCw = (e) => {
    e.currentTarget.classList.toggle('refreshed');
  };

  useEffect(() => {
    setTimeout(() => {
      typingMessage(false);
    }, 3000);
  }, [isTyeping]);
  const sk = socket.id

  return chatMembers && chats && selectedUser ? (
    <>
      <div    className='messages custom-scroll active wallpapers' id='chating'>
        <div className='contact-details'>
          <div className='row'>
            <form className={`form-inline search-form ${search ? 'open' : ''}`}>
              <div className='form-group'>
                <input
                  className='form-control-plaintext'
                  type='search'
                  placeholder='Search...'
                />
                <div
                  className='icon-close close-search'
                  onClick={() => setSearch(false)}
                ></div>
              </div>
            </form>
            <div className='col-7'>
              <div className='media left'>
                <div
                  className='media-left mr-3'
                
                >
                  <div
                    className={`profile menu-trigger ${selectedUser.onlineStatus}`}
                    style={{
                      backgroundImage: `url('/assets/images/logo/logo.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'block',
                    }}
                  ></div>
                </div>
                <div className='media-body'>
                  <h6>{sk} </h6>
                  <div
                    className={`badge ${selectedUser.onlineStatus === 'online'
                      ? 'badge-success'
                      : 'badge-danger'
                      }`}
                  >
                    {selectedUser.onlineStatus === 'online'
                      ? '256 Active users'
                      : 'InActive'}
                  </div>
                </div>
                <div className='media-right'>
                  <ul>
                    <li>
                      <a
                        className='icon-btn btn-light button-effect mute'
                        href='#'
                        onClick={() => setVolum(!volum)}
                      >
                        {volum ? <span className='effect-wave'></span> : ''}
                        <i
                          className={`fa fa-volume-up ${volum ? '' : 'off'}`}
                        ></i>
                      </a>
                    </li>
                 
                    <li>
                     
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col'>
              <ul className='calls text-right'>
                <li>
                  <Tooltip
                    title='Quick Audio Call'
                    position='bottom-end'
                    trigger='mouseenter'
                  >
                    <a
                      className='icon-btn btn-light button-effect'
                      href='#'
                      onClick={() => setAudiocall(!audiocall)}
                    >
                      <Phone />
                    </a>
                  </Tooltip>
                  <Modal
                    className='show'
                    isOpen={audiocall}
                    toggle={toggleAudiocall}
                    centered={true}
                  >
                
                  </Modal>
                  <Modal
                    className='show'
                    isOpen={audiocall}
                    toggle={toggleAudiocall}
                    centered={true}
                  >
                    <ModalBody className='p-0'>

  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-body">
                      <div
                        className='audiocall1 call-modal backgallery'
                        style={{
                          backgroundImage: `url('../assets/images/avtar/big/audiocall.png')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          display: 'block',
                        }}
                      >
                        <img
                          className='bg-img'
                          src='../assets/images/avtar/big/audiocall.png'
                          alt='Avatar'
                          style={{ display: 'none' }}
                        />
                        <div className='center-con1 text-center'>
                        <br />
                        <br /> 
                        <br />
                          <div className='title2'>Community Gallery</div>
                          <h6>Contact us to be featured</h6>
                          <ul>
            <li>
              <a
                className="icon-btn btn-outline-light button-effect btn-xl "
                href="https://www.google.com/"
                data-bs-toggle="modal"
                data-bs-target="#audiorcvcall"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </li>
          </ul>
                        </div>
                      </div>
                     
                      </div>
                      </div>
                    </ModalBody>
                  </Modal>
                </li>
                <li>
                  <Tooltip
                    title='Quick Video Call'
                    position='bottom-end'
                    trigger='mouseenter'
                  >
                    <a
                      className='icon-btn btn-light button-effect'
                      href='#'
                      onClick={() => setVideocall(!videocall)}
                    >
                      <Video />
                    </a>
                  </Tooltip>
                  <Modal
                    className={`viddiolog fade show ${videoscreen ? 'active' : ''
                      }`}
                    isOpen={videocall}
                    toggle={toggleVideocall}
                    centered={true}
                  >
                    <ModalBody>
                    
                      <div
                        className='videocall call-modal '
                        style={{
                          backgroundImage: `url('../assets/images/avtar/big/videocall_bg.png')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          display: 'block',
                        }}
                      >
                       
                        
              
                  
                      </div>
                    </ModalBody>
                  </Modal>
                </li>
            
                <li className='chat-friend-toggle'>
                  <Dropdown
                    isOpen={props.quickAction}
                    toggle={() => props.setQuickAction(!props.quickAction)}
                  >
                    <Tooltip
                      title='Quick action'
                      trigger='mouseenter'
                      position='bottom-end'
                    >
                      <DropdownToggle
                        tag='button'
                        data-toggle='dropdown'
                        aria-expanded={props.quickAction}
                        className='icon-btn btn-light bg-transparent button-effect outside'
                      >
                        <MoreVertical />
                      </DropdownToggle>
                    </Tooltip>
                    <div
                      className='chat-frind-content'
                      style={
                        props.quickAction
                          ? { display: 'block' }
                          : { display: 'none' }
                      }
                    >
                      <ul>
                       
                        <li>
                          <a
                            className='icon-btn btn-outline-danger button-effect btn-sm'
                            href='#'
                            onClick={() => setDeleteModal(!deleteModal)}
                          >
                            <Trash2 />
                          </a>
                          <h5 onClick={() => setDeleteModal(!deleteModal)}>
                            Donate
                        </h5>
                        </li>
                        <li>
                          <a
                            className='icon-btn btn-outline-light button-effect btn-sm'
                            href='#'
                            onClick={() => setBlockModal(!blockModal)}
                          >
                            <Slash />
                          </a>
                          <h5 onClick={() => setBlockModal(!blockModal)}>
                            Block
                        </h5>
                        </li>
                      </ul>
                    </div>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
        <Modal
          isOpen={blockModal}
          className='add-popup delete-modal'
          toggle={() => setBlockModal(!blockModal)}
          centered
        >
          <ModalHeader toggle={() => setBlockModal(!blockModal)}></ModalHeader>
          <ModalBody>
            <h3>Do you want to block this user?</h3>
            <div className='delete-btn'>
              <Button
                className='button-effect'
                size='sm'
                color='danger'
                onClick={() => setBlockModal(!blockModal)}
              >
                Block
            </Button>
              <Button
                className='button-effect ml-2'
                size='sm'
                color='primary'
                onClick={() => setBlockModal(!blockModal)}
              >
                Close
            </Button>
            </div>
          </ModalBody>
        </Modal>
        <div className='contact-chat'>
          <ul className='chatappend'>
            
              <>
              
      {list.map(function(p){
             if (p.id === sk) {
              return(
                <li className='replies'>
                        <div className='media'>
                          <div
                            className='profile mr-4'
                            style={{
                              backgroundImage: `url('assets/images/avtar/1.jpg')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              display: 'block',
                            }}
                          >
                            <img
                              className='bg-img'
                              src='/assets/images/avtar/1.jpg'
                              alt='Avatar'
                              style={{ display: 'none' }}
                            />
                          </div>
                          <div className='media-body'>
                            <div className='contact-name'>
                              <h5>{p.id}</h5>
                              
                              <ul className='msg-box'>
                                <li className='msg-setting-main'>
                                  <h5>{p.chatText}</h5>
                                </li>
                               
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
              )
              
            }
              
            
            else{
            return(
              <li className='sent'>
            <div className='media'>
              <div
                className='profile mr-4'
                style={{
                  backgroundImage: `url('/assets/images/avtar/3.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'block',
                }}
              >
                <img
                  className='bg-img'
                  src='/assets/images/avtar/3.jpg'
                  alt='Avatar'
                  style={{ display: 'none' }}
                />
              </div>
              <div className='media-body'>
                <div className='contact-name'>
                  <h5>{p.id}</h5>
                  
                  <ul className='msg-box'>
                    <li className='msg-setting-main'>
                      <h5>{p.chatText}</h5>
                    </li>
                    <li className='msg-setting-main'>
                    
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
            )
        }
       
      }
      )}
               
                
              </>
            
          
            
           
          </ul>
        </div>
      </div>
      <div className='message-input'>
      <div className='wrap emojis-main'>
        

      
        <input
          className='setemoj'
          id="chatinn"
          type='text'
          placeholder='Write your message...'
        
          onChange={(c)=> setChat(c.target.value)}
        />
       
      
        <button
          className={`submit icon-btn btn-primary $`}
          onClick={handlepost}
        >
          <Send />
        </button>
      </div>
    </div>
    </>
  ) : (
      ''
    );
};

export default CustomChat;

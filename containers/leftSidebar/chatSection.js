import { useState, useContext } from 'react';

import {
 
  Dropdown,
  DropdownToggle,
} from 'reactstrap';
import ChatContext from '../../helpers/chatContext';

const ChatSection = () => {
  const chatCtx = useContext(ChatContext);

  const [activeTab, setActiveTab] = useState('chat');
  const [chatSubTab, setChatSubTab] = useState('direct');
  const [ChatContact, setChatContact] = useState(false);

 


  return (
    <div className='chat custom-scroll'>
      <Dropdown
        isOpen={ChatContact}
        toggle={() => setChatContact(!ChatContact)}
      >
        <DropdownToggle
          tag='span'
          role="button"
          data-toggle='dropdown'
          aria-expanded={ChatContact}
        ></DropdownToggle>
        </Dropdown>
        </div>
             
   
   
  );
};

export default ChatSection;

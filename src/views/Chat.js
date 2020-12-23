import React from 'react';
import VirtualList from 'react-tiny-virtual-list';
import {ProfilePicture} from "../components/ProfilePicture";
import {string} from "prop-types";

const ChatHeader = props => {
  return null;
}

const Message = props => {
  return(<div className={" border-b-1 border-white-200 py-5 mx-5"}>
      <ProfilePicture status={null}/>
      <span className={"font-bold text-white"}>{props.sender}:</span>
      <span> </span>
      <span className="text-white">{props.message}</span>

  </div>)
}
Message.propTypes = {
  sender: string,
  message: string
}
const SidePanel = props => {
  return <>
    <button><ProfilePicture image={""} status={"online"}/> <span className="font-bold">{props.username}</span></button>
  </>
}

const ChatBox = props => {
  return null; // wip
}

const ChatPanel = props => {
  let data = [
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },

  ];
  return(<>
    <ChatHeader/>
      <VirtualList
        width='100%'
        height={600}
        itemCount={data.length}
        itemSize={50} // Also supports variable heights (array or function getter)
        renderItem={({index, style}) => <Message key={index} message={data[index].message} sender={data[index].sender}/>
        }
      />
    <ChatBox />
  </>);
}

const Chat = props => {
  function handleChatChange(event){

  }
  return (
    <>
      <ChatHeader />
      <SidePanel />
      <ChatPanel />
      </>
  )
}

export default Chat;

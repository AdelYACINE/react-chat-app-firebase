import { useContext } from "react";
import ChatContext from "../Context/ChatContext";

const Messages = ({ msg }) => {
  const { currentUser } = useContext(ChatContext);
  console.log(msg);

  return (
    <div className="messages-container">
      <div
        className={
          currentUser.displayName === msg.user
            ? "chat chat-end"
            : "chat chat-start"
        }
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={msg.pic} alt="avatar" />
          </div>
        </div>
        <div className="chat-header">{msg.user}</div>
        <div className="chat-bubble">{msg.text}</div>
      </div>
    </div>
  );
};

export default Messages;

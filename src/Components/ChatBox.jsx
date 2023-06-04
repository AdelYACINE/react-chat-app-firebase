import { useEffect, useRef, useState } from "react";
import Messages from "./Messages";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../Config/Firebase";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const messageRef = useRef();

  //autoScroll
  const scrollBottom = () => {
    messageRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollBottom();
  }, [messages]);

  //see messages in realtime
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createAt"), limit(50));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        setMessages(messages);
      });

      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="chat-box-container">
      {messages.map((msg) => {
        return <Messages key={msg.id} msg={msg} />;
      })}
      <div ref={messageRef}></div>
    </div>
  );
};

export default ChatBox;

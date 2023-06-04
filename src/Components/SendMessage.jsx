import { useContext, useRef, useState } from "react";
import { db } from "../Config/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import ChatContext from "../Context/ChatContext";

const SendMessage = () => {
  const { currentUser } = useContext(ChatContext);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  //add messages
  const addDocument = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        text: inputValue,
        user: currentUser.displayName,
        pic: currentUser.photoURL,
        id: currentUser.uid,
        createAt: serverTimestamp(),
      });

      console.log(currentUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      addDocument();
    }

    inputRef.current.value = "";
  };

  return (
    <div className="send-message bg-primary">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          ref={inputRef}
          type="text"
          className="input focus:outline-none w-full"
          onChange={() => {
            setInputValue(inputRef.current.value);
          }}
        />
        <button type="submit" className="btn btn-send ">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;

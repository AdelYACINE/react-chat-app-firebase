import { useEffect, useState } from "react";
import ChatContext from "./ChatContext";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../Config/Firebase";

const ChatContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //SignIn with google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Logout
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  //set current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <ChatContext.Provider
      value={{ currentUser, setCurrentUser, signInWithGoogle, logOut }}
    >
      {!loading && children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;

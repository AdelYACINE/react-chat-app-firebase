import { useContext, useEffect } from "react";
import ChatContext from "../Context/ChatContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { currentUser, signInWithGoogle } = useContext(ChatContext);
  console.log(currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋</h1>
          <p className="py-6">
            Join the conversation,meet new people,and make connections in one
            share room.
          </p>
          <button className="btn btn-primary" onClick={signInWithGoogle}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

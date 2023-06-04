import { Navigate } from "react-router-dom";
import { useContext } from "react";
import ChatContext from "../Context/ChatContext";

const PrivateRoutes = ({ children }) => {
  const { currentUser } = useContext(ChatContext);

  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export default PrivateRoutes;

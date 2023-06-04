import { useContext } from "react";
import ChatContext from "../Context/ChatContext";

const Navbar = () => {
  const { logOut, currentUser } = useContext(ChatContext);

  return (
    <div className=" bg-primary nav-container">
      <div className="navbar bg-primary text-primary-content flex justify-between">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          ChatApp
        </a>
        {currentUser && (
          <button className="btn btn-primary" onClick={logOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

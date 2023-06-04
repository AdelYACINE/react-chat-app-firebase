import Navbar from "./Components/Navbar";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./Routes/PrivateRoutes";
import ChatContextProvider from "./Context/ChatContextProvider";

function App() {
  return (
    <ChatContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoutes>
                <Chat />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Router>
    </ChatContextProvider>
  );
}

export default App;

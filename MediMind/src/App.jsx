import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/Login_SignUp.jsx";
import HomePage from "./Components/Home/HomePage.jsx";
import ChatPage from "./Components/ChatPage/ChatPage.jsx";

function App() {
  return (
    <Routes>
      {/* Login page at /login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Homepage at root */}
      <Route path="/" element={<HomePage />} />

      {/* Chat page at /chat */}
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;

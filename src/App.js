import "./App.css";
import styled from "styled-components";
import React from "react";

// Route 연결
import { Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import FortuneCardPages from "./pages/FortuneCardPages";
import UserPage from "./pages/UserPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={null} />
        {/* 카드 페이지 */}
        <Route path="/fortune/*" element={<FortuneCardPages />} />
        {/* 유저 페이지 */}
        <Route path="/user/*" element={<UserPage />} />
        
      </Routes>
  );
}

export default App;

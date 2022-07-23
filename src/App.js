import styled from "styled-components";
import React from "react";

// Route 연결
import { Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Bootstrap 연결
import "bootstrap/dist/css/bootstrap.min.css";

import FortuneCardPages from "./pages/FortuneCardPages";
import UserPages from "./pages/UserPages";

import NotFoundPage from "./pages/NotFoundPage";
import StartingPage from "./pages/StartingPage";


function App() {
  return (
      <Routes>
        {/* 시작 페이지 */}
        {/* 분기점으로서의 App.js // 0. 자기 자신은 index로 path 표현 가능 */}
        <Route index element={<StartingPage/>} />
        {/* 카드 페이지 */}
        {/* 와일드카드 *를 이용해 다양한 페이지 작성 가능 */}
        <Route path="/fortune/*" element={<FortuneCardPages />} />
        {/* 유저 페이지 */}
        <Route path="/user/*" element={<UserPages />} />
        {/* 잘못 된 접근 페이지 */}
        {/* 위의 경로를 제외한 모든 주소를 NotFound로 제공 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;

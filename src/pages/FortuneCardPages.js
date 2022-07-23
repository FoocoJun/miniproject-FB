import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";

const FortuneCardPages = () => {
  return (
    <AppMain>
      <MainCard>
          <Routes>
            {/* 회원가입과 로그인 //  로그인, 회원가입 : 하준 */}
            <Route path="/fortune/signin" element={null} />
            <Route path="/fortune/signup" element={null} />
            {/* 운세 페이지 // 선택, 일기작성 : 소현 & 운세결과 : 하준*/}
            <Route path="/fortune/select" element={null} />
            <Route path="/fortune/resurt" element={null} />
            <Route path="/fortune/post" element={null} />
          </Routes>
      </MainCard>
    </AppMain>
  );
};

const AppMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainCard = styled.div`
  background-color: #fff;
  border-radius: 40px;
  width: 400px;
  height: 568.89px;
  @media (max-width: 500px) {
    & {
      width: 300px;
      height: 426.67px;
    }
  }
  filter: drop-shadow(50px 50px 50px rgba(0, 0, 0, 0.25));
`;

export default FortuneCardPages;

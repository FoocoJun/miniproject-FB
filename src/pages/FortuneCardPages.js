import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SelectPage from "./SelectPage";

const FortuneCardPages = () => {
  return (
    <AppMain>
      <MainCard>
          <Routes>
            {/* 회원가입과 로그인 */}
            <Route path="signin" element={null} />
            <Route path="signup" element={null} />
            {/* 운세 페이지 */}
            <Route path="select" element={<SelectPage />} />
            <Route path="resurt" element={null} />
            <Route path="post" element={null} />
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

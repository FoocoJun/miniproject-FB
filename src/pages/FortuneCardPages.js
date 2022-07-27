import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";

import SelectPage from "./SelectPage";
import NotFoundPage from "./NotFoundPage";

import ResultPage from "./ResultPage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import WelcomePage from "./WelcomePage";
import PostPage from "./PostPage";

const FortuneCardPages = () => {
  let sessionStorage = window.sessionStorage;
  const userData = useSelector((state) => state.users.userData);
  console.log(sessionStorage.getItem("checkdiary"))
  console.log(userData);
  
  return (
    <AppMain>
      <MainCard>

        <Routes>
          {/* 시작점으로서의 FortuneCardPages.js */}
          <Route index element={<WelcomePage />} />         {/*::진행 중::*/}
          {/* 회원가입과 로그인 //  하준 */}
          {/* 와일드카드로 제공된 자리는 그 Params로 작성 */}
          <Route path="signin" element={<SignInPage />} />  {/*@@기능 완료@@*/}
          <Route path="signup" element={<SignUpPage />} />  {/*@@기능 완료@@*/}
          {/* 운세 페이지 // 선택, 일기작성 : 소현 & 운세결과 : 하준*/}
          {sessionStorage.getItem("nickname") && <Route path="select" element={<SelectPage />} />}
          {sessionStorage.getItem("nickname") && <Route path="result" element={<ResultPage />} />}  {/*++뷰 완료++*/}
          {sessionStorage.getItem("nickname") && <Route path="post" element={<PostPage />} />    }  {/*++뷰 완료++*/}
          {/* 잘못 된 접근 페이지 */}
          <Route path="*" element={<NotFoundPage />} />     {/*++뷰 완료++*/}
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
  filter: drop-shadow(50px 50px 50px rgba(0, 0, 0, 0.40));
`;

export default FortuneCardPages;

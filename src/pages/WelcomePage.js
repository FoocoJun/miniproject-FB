import React from "react";
import styled from "styled-components";

import {useNavigate } from "react-router-dom";


// 제목 스타일 컴포넌트 연결
import BigTitle from "../components/buttons/BigTitle";

const WelcomePage = () => {

  const navigate = useNavigate();
  
  return (

    <SignInBox>
      <BigTitle /> 
      <BigButton onClick={() => navigate("/fortune/signin")}>
        로그인
        {/* 로그인 된 유저에게는 로그인 -> 당신의 이야기로 바껴야함! */}
      </BigButton>
    </SignInBox>
  );
};


// Styled Components 적용
const SignInBox = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 62.44px 0px;
`;

const BigButton = styled.button`
  width: 60%;
  height: 20%;
  font-size: 1.5rem;
  font-weight: bolder;
  background: #440068;
  color: #fff;
  border-radius: 20px;
`;

export default WelcomePage;

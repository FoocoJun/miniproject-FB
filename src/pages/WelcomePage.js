import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux/es/hooks/useSelector";

import { useNavigate } from "react-router-dom";

// 제목 스타일 컴포넌트 연결
import BigTitle from "../components/buttons/BigTitle";

const WelcomePage = () => {
  const userData = useSelector((state) => state.users.userData);
  console.log(userData)

  const navigate = useNavigate();

  return (
    <ComponentBox>
      <BigTitle />
      <BgBox>
        <img
          src={process.env.PUBLIC_URL + "/imges/card_bg.png"}
          style={{
            height: "105%",
            margin: "0px auto",
          }}
        />
      </BgBox>
      {userData.nickname == "" ? (
        <BigButton onClick={() => navigate("/fortune/signin")}>
          로그인
          {/* 로그인 된 유저에게는 '로그인' -> '당신의 이야기'로 보여야함. */}
        </BigButton>
      ) : (
        <BigButton onClick={() => navigate("/fortune/select")}>
          당신의 이야기
        </BigButton>
      )}
    </ComponentBox>
  );
};

// Styled Components 적용
const ComponentBox = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 63.03px 0px 0 0px;
`;
const BgBox = styled.div`
  width: 100%;
  height: 67%;
  overflow: hidden;
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

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SmallTitle from "../components/buttons/SmallTitle";
import BigTitle from "../components/buttons/BigTitle";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SmallTitle />
      <SignInBox>
        <div>
          <h1>회원가입</h1>
        </div>
        <SignInInputSection>
          <div
            style={{
              display: "flex",
              // height:"40px",
              // margin:"10% 0",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <InputBox>
              <input type="text" placeholder="아이디를 입력해주세요." />
            </InputBox>
            <ButtonBox>
              <button>확인</button>
            </ButtonBox>
          </div>
          <div
            style={{
              display: "flex",
              // height:"40px",
              // margin:"10% 0",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <InputBox>
              <input type="text" placeholder="닉네임을 입력해주세요." />
            </InputBox>
            <ButtonBox>
              <button>확인</button>
            </ButtonBox>
          </div>
          <InputBox>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </InputBox>
          <InputBox>
            <input type="password" placeholder="생년월일을 입력해주세요." />
          </InputBox>
        </SignInInputSection>
        <BigButton onClick={() => navigate("/fortune/signin")}>
          회원가입
        </BigButton>
      </SignInBox>
    </>
  );
};

const SignInBox = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      margin: 5% auto 0;
    }
    h5 {
      margin: 0 auto;
      span {
        color: darkorange;
      }
    }
  }
`;

const SignInInputSection = styled.section`
  width: 70%;
`;

const InputBox = styled.div`
  width: 100%;
  height: 40px;
  margin: 5% auto;

  background: #ffffff;
  border: 1.5px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  input {
    width: 80%;
    height: 100%;
    border: none;
    font-size: 0.9rem;
    &:focus {
      outline: none;
    }
  }
`;

const ButtonBox = styled.div`
  width: 35%;
  height: 40px;
  margin: 5% 0 5% 5%;

  background: #ffffff;
  /* border: 1.5px solid #d9d9d9; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  button {
    width: 100%;
    height: 100%;
    border-radius: 40px;
    border: none;
    background-color: #d9d9d9;
    color: #400068;
    font-weight: bold;

    &:hover {
      background-color: #400068;
      color: #fff;
    }
  }
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

export default SignUpPage;

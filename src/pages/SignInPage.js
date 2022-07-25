import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import SmallTitle from "../components/buttons/SmallTitle";

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SmallTitle />
      <ComponentBox>
        <div>
          <h1>로그인</h1>
          <h5>
            아이디가 없으신가요?
            <Link to="/fortune/signup" style={{ textDecoration: "none" }}>
              <span> 회원가입</span>
            </Link>
          </h5>
        </div>
        <SignInInputSection>
          <InputBox>
            <input type="text" placeholder="아이디를 입력해주세요." />
          </InputBox>
          <InputBox>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </InputBox>
        </SignInInputSection>
        <BigButton onClick={() => navigate("/fortune/signup")}>
          로그인
        </BigButton>
      </ComponentBox>
    </>
  );
};

const ComponentBox = styled.div`
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
      margin: 10% auto 0 ;
      font-family: '양진체';
      font-weight: bold;
    }
    h5 {
      margin: 3% auto;
      font-size: .8rem;
      font-weight: bold;
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
  margin: 15% auto;

  background: #ffffff;
  border: 1.5px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  input {
    width: 80%;
    height: 100%;
    border: none;
    font-size:.9rem;
    &:focus {
      outline: none;
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

export default SignInPage;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { keepUserDataMW } from "../redux/modules/users";

import styled from "styled-components";

import SmallTitle from "../components/buttons/SmallTitle";


const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signInIdInputRef = React.useRef(null);
  const signInPwInputRef = React.useRef(null);

  const submitToSiginIn = (e) => {
    e.preventDefault();
    const InputId = signInIdInputRef.current.value;
    const InputPw = signInPwInputRef.current.value;
    // 로그인 시 비밀번호가 콘솔창에 떠서 주석처리 했습니다. (7.26.)
    //console.log(InputId, InputPw);

    const userData = { username: InputId, password: InputPw };

    //로그인 요청 보내는 자리
    dispatch(keepUserDataMW(userData,navigate))
  };

  return (
    <>
      <SmallTitle />
      <ComponentBox onSubmit={submitToSiginIn}>
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
            <input
              type="text"
              ref={signInIdInputRef}
              placeholder="아이디를 입력해주세요."
              required
            />
          </InputBox>
          <InputBox>
            <input
              type="password"
              ref={signInPwInputRef}
              placeholder="비밀번호를 입력해주세요."
              required
            />
          </InputBox>
        </SignInInputSection>
        <BigButton>로그인</BigButton>
      </ComponentBox>
    </>
  );
};

const ComponentBox = styled.form`
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
      margin: 10% auto 0;
      font-family: "양진체";
      font-weight: bold;
    }
    h5 {
      margin: 3% auto;
      font-size: 0.8rem;
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
    font-size: 0.9rem;
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

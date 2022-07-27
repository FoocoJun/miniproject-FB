import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SmallTitle from "../components/buttons/SmallTitle";

import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const signUpIdInputRef = React.useRef(null); //ID
  const signUpNnInputRef = React.useRef(null); //Nickname
  const signUpPwInputRef = React.useRef(null); //Password
  const signUpBdInputRef = React.useRef(null); //Birthday

  const submitToSiginUp = async (e) => {
    e.preventDefault();
    const InputId = signUpIdInputRef.current.value;
    const InputNn = signUpNnInputRef.current.value;
    const InputPw = signUpPwInputRef.current.value;
    let InputBd = signUpBdInputRef.current.value;
    // 이메일 유효성 검사
    const CorrectBirthday = /[0-9]{8}/;
    if (!CorrectBirthday.test(InputBd)) {
      alert("생일 양식을 확인해주세요. YYYYMMDD");
      return;
    }
    InputBd = InputBd.split("");
    InputBd.splice(4, 0, ".");
    InputBd.splice(7, 0, ".");
    InputBd = InputBd.join("");
    // 회원가입 시 비밀번호가 콘솔창에 떠서 주석처리 했습니다. (7.26.)
    // console.log(InputId, InputNn, InputPw, InputBd);

    //회원가입 요청 보내는 자리
    try {
      await axios({
        method: "post",
        url: "/user/signup",
        data: {
          username: InputId,
          password: InputPw,
          nickname: InputNn,
          dateOfBirth: InputBd,
        },
      }).then((Response) => console.log(Response));
      navigate("/fortune/signin");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error)
    }
  };

  return (
    <>
      <SmallTitle />
      <ComponentBox onSubmit={submitToSiginUp}>
        <div>
          <h1>회원가입</h1>
        </div>
        <SignInInputSection>
          {/* <div
            style={{
              display: "flex",
              height:"40px",
              margin:"4% 0",
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
              height:"40px",
              margin:"4% 0",
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
          </div> */}
          <InputBox>
            <input
              type="text"
              ref={signUpIdInputRef}
              placeholder="아이디를 입력해주세요."
              required
            />
          </InputBox>
          <InputBox>
            <input
              type="text"
              ref={signUpNnInputRef}
              placeholder="닉네임을 입력해주세요."
              required
            />
          </InputBox>
          <InputBox>
            <input
              type="password"
              ref={signUpPwInputRef}
              placeholder="비밀번호를 입력해주세요."
              required
              minLength={6}
            />
          </InputBox>
          <InputBox>
            <input
              type="text"
              ref={signUpBdInputRef}
              placeholder="생년월일(ex: 19960225)"
              required
              maxLength={8}
            />
          </InputBox>
        </SignInInputSection>
        <BigButton>회원가입</BigButton>
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
      margin: 15% auto 0;
      font-family: "양진체";
      font-weight: bolder;
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

// const ButtonBox = styled.div`
//   width: 35%;
//   height: 40px;
//   margin: 5% 0 5% 5%;

//   background: #ffffff;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 40px;

//   button {
//     width: 100%;
//     height: 100%;
//     border-radius: 40px;
//     border: none;
//     background-color: #d9d9d9;
//     color: #400068;
//     font-weight: bold;

//     &:hover {
//       background-color: #400068;
//       color: #fff;
//     }
//   }
// `;

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

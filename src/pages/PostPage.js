import React from "react";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../redux/modules/users";

const PostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users.userData);
  // console.log(userData);

  let sessionStorage = window.sessionStorage;
  const fortune = sessionStorage.getItem("fortune");
  const contentsInputRef = React.useRef();

  const submitToPost = (e) => {
    e.preventDefault();

    // console.log(contentsInputRef.current.value);
    //진행중.
    axios({
      method: "post",
      url: process.env.REACT_APP_DB_HOST+"/api/user/diary",
      data: {
        contents: contentsInputRef.current.value,
      },
    })
      .then((res) => {
        // console.log(res);
        sessionStorage.setItem("checkdiary", true);
        dispatch(updateUserData());
        navigate("/user/list");
      })
      .catch((err) => console.log(err));
  };

  const maxLengthCheck = ()=> {
    if (contentsInputRef.current.value.length > 75) {
      contentsInputRef.current.value = contentsInputRef.current.value.slice(0,75)
    }
  }

  return (
    <ComponentBox>
      <Title> 밤의 이야기 </Title>
      <PostBox onSubmit={submitToPost}>
        <FortuneTextBox>
          {/* 운세글 get */}
          <FortuneText> {fortune} </FortuneText>
        </FortuneTextBox>
        {userData.checkdiary === "false" || userData.checkdiary === false ? (
          <InputStyle
            ref={contentsInputRef}
            rows="3"
            cols="20"
            wrap="hard"
            placeholder="내용을 입력하세요."
            onChange={maxLengthCheck}
            required
          />
        ) : (
          <InputStyle
            ref={contentsInputRef}
            rows="3"
            cols="20"
            wrap="hard"
            placeholder="이미 작성하였습니다."
            disabled
          />
        )}

        {/* 작성 버튼 */}

        {userData.checkdiary === "false" || userData.checkdiary === false ? (
          <MediumButton>작성하기</MediumButton>
        ) : (
          <MediumButton onClick={() => navigate("/user/list")}>
            {" "}
            내 일기장{" "}
          </MediumButton>
        )}
      </PostBox>
    </ComponentBox>
  );
};

const ComponentBox = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 63.03px 0px 0;
`;
const Title = styled.h1`
  font-family: "PyeongChangPeace-Bold";
  color: #440068;
`;
const PostBox = styled.form`
  width: 75%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FortuneTextBox = styled.div`
  width: 70%;
  height: 30%;

  color: #10305f;
`;
const FortuneText = styled.h3`
  font-size: 1rem;
  text-align: center;
  font-family: "국립박물관문화재단클래식B";
  word-break: keep-all;
`;
const InputStyle = styled.textarea`
  width: 100%;
  height: 70%;
  border: 1px solid #eee;
  box-shadow: -2px 4px 5px rgb(189, 189, 189);
  border-radius: 2rem;
  box-sizing: border-box;
  padding: 10%;
  resize: none;
  margin-bottom: 8%;
  font-family: "LeeSeoyun";
`;
const MediumButton = styled.button`
  width: 80%;
  height: 30%;
  font-size: 1.5rem;
  font-weight: bolder;
  background: #440068;
  color: #fff;
  border-radius: 20px;
`;

export default PostPage;

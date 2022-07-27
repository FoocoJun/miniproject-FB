import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { keepUserDataMW } from "../redux/modules/users";

import styled from "styled-components";

const ResultPage = () => {
  const navigate = useNavigate();
  const Time = new Date();
  const NowTimeClock = Time.toTimeString().substring(0, 2);
  const [fortune,setFortune] =React.useState(null)

  React.useEffect(() => {
    const getFortune = async () => {
      axios("/user/fortune/result").then((res) => {
        console.log(res);
        setFortune(res.data);

      });
    };

    getFortune();
  }, []);

  return (
    <ComponentBox>
      {/* 5시~ 11시 59분 (아침) / 12시~ 17시59분 (오후) / 18시~ 04시59분 (밤) */}
      {/* {NowTimeClock <= 11 && NowTimeClock > 4 ? (
        <TitleText>아침의 이야기</TitleText>
      ) : NowTimeClock <= 17 && NowTimeClock > 11 ? (
        <TitleText>일상을 사세요</TitleText>
      ) : (
        <TitleText>밤의 이야기</TitleText>
      )} */}
      {NowTimeClock <= 11 && NowTimeClock > 4 ? (
        <TitleText>아침의 이야기</TitleText>
      ) : NowTimeClock <= 17 && NowTimeClock > 11 ? (
        <TitleText>일상을 사세요</TitleText>
      ) : (
        <TitleText>밤의 이야기</TitleText>
      )}

      <FortuneText>{fortune}</FortuneText>

      {NowTimeClock <= 11 && NowTimeClock > 4 ? (
        <div>
          <RestrictText>{"화이화이화이자!"}</RestrictText>
          <h5 style={{ color: "gray" }}>
            일기는 오후 6시 이후에 작성 가능합니다.
          </h5>
        </div>
      ) : NowTimeClock <= 17 && NowTimeClock > 11 ? (
        <>
          <div>
            <RestrictText>
              {"남아있는 하루의 즐거움을 찾아서 떠나세요"}
            </RestrictText>
            <h5 style={{ color: "gray" }}>
              일기는 오후 6시 이후에 작성 가능합니다.
            </h5>
          </div>
        </>
      ) : (
        <BigButton onClick={() => navigate("/fortune/post")}>
          일기 쓰러가기
        </BigButton>
      )}
    </ComponentBox>
  );
};

//글꼴 적용
const TitleText = styled.h1`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  font-family: "PyeongChangPeace-Bold";
  text-align: right;
  color: #440068;
`;

const FortuneText = styled.p`
  color: #10305f;
  font-style: normal;
  font-weight: 700;
  font-family: "국립박물관문화재단클래식B";
  width: 70%;

  font-size: 22px;
  line-height: 24px;
  text-align: center;
  word-break: keep-all; //한중일의 경우 띄어쓰기 기준으로 짜름~
`;

const RestrictText = styled.p`
  color: #10305f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  overflow-y: hidden;
  width: 70%;

  font-size: 16px;
  line-height: 18.5px;
  text-align: center;
  margin: 0;
  word-break: keep-all;
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

const ComponentBox = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 63.03px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      margin: 0 auto;
    }
    h5 {
      margin: 0 auto;
      font-size: 0.8rem;
      color: gray;
    }
  }
`;

export default ResultPage;

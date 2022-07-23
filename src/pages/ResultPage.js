import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BigTitle from "../components/buttons/BigTitle";

const ResultPage = () => {
  const navigate = useNavigate();
  const Time = new Date();
  const NowTimeClock = Time.toTimeString().substring(0, 2);
  console.log(NowTimeClock);
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

      <FortuneText>{`
아침에 옆사람 뒷통수를
때리면 즐거울거야
        `}</FortuneText>

      {NowTimeClock <= 11 && NowTimeClock > 4 ? (
        <div>
          <RestrictText>{`
화이화이화이자!
        `}</RestrictText>
          <h5 style={{ color: "gray" }}>일기는 오후 6시 이후에 작성 가능합니다.</h5>
        </div>
      ) : NowTimeClock <= 17 && NowTimeClock > 11 ? (
        <>
          <div>
            <RestrictText>{`
남아있는 하루의 즐거움을
찾아서 떠나세요
        `}</RestrictText>
            <h5 style={{ color: "gray" }}>일기는 오후 6시 이후에 작성 가능합니다.</h5>
          </div>
        </>
      ) : (
        <BigButton onClick={() => navigate("/fortune/signin")}>
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

//가운데 absolute 정렬
const FortuneText = styled.pre`
  color: #10305f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-family: '국립박물관문화재단클래식B';

  font-size: 22px;
  line-height: 24px;
  text-align: center;
  position: absolute;

  top: 36%;
`;

//아무것도 아님
const RestrictText = styled.pre`
  color: #10305f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;

  font-size: 16px;
  line-height: 18.5px;
  text-align: center;
  margin: 0;
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
  margin-top: 62.44px;
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
      color: gray;
    }
  }
`;

export default ResultPage;

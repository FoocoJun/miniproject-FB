import React from "react";
import styled from "styled-components";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SelectPage = () => {
    
  return (
    <ComponentBox>
      <TitleText> 선택하시오 </TitleText>
      <div style={{ display: "inline-block", height: "90%", width: "80%" }}>
        {/* 절반으로 나누어 칸 고정 후 addEvent */}
        <div
          style={{
            height: "50%",
          }}
        >
          <Link
            to={"/fortune/result"}
            style={{
              height: "80%",
              width: "90%",
              borderRadius: "40px",
              boxShadow: "-2px 4px 5px 3px rgb(189, 189, 189)",
              backgroundColor: "#DCDCDC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={process.env.PUBLIC_URL + "/imges/1212_01.png"}
              height="80%"
            />
          </Link>
        </div>
        <div
          style={{
            height: "50%",
          }}
        >
          <Link
            to={"/fortune/result"}
            style={{
              height: "80%",
              width: "90%",
              borderRadius: "40px",
              boxShadow: "-2px 4px 5px 3px rgb(189, 189, 189)",
              backgroundColor: "#DCDCDC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={process.env.PUBLIC_URL + "/imges/stella_01.png"}
              height="80%"
            />
          </Link>
        </div>
      </div>
    </ComponentBox>
  );
};

// Stlyed Components 적용

const TitleText = styled.h1`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  font-family: "PyeongChangPeace-Bold";
  text-align: right;
  color: #440068;
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
      color: gray;
    }
  }
`;

export default SelectPage;

import React from "react";
import styled from "styled-components";

import ImageBox1212 from "../components/ImageBox1212";
import ImageBoxStella from "../components/ImageBoxStella";

const SelectPage = () => {
  return (
    <ComponentBox>
      <TitleText> 선택하시오 </TitleText>
      <div style={{ display: "inline-block", height: "90%", width: "80%" }}>
        <div
          style={{
            height: "50%",
          }}
        >
          <ImageBox1212 />
        </div>
        <div
          style={{
            height: "50%",
          }}
        >
          <ImageBoxStella />
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

import React from "react";

import styled from "styled-components";

const SelectPage = () => {
  return (
    <div style={{width:"100%", overflow:"hidden"}}>
      <Title> 선택하시오 </Title>
      <ImgBox>
        <div><img></img></div>
        <div></div>
        
      </ImgBox>
    </div>
  );
};

// Stlyed Components 적용

const Title = styled.h1`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  font-family: "PyeongChangPeace-Bold";
  text-align: right;
  color: #440068;
`;

const ImgBox = styled.div`
width: 400px;
height: 400px;
background-color: red;
`;

export default SelectPage;

import React from "react";
import styled from "styled-components";

const BigTitle = () => {
  return <Text>아침과 밤의 이야기</Text>;
};

const Text = styled.h1`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  font-family: "PyeongChangPeace-Bold";
  text-align: right;
  color: #440068;
`;

export default BigTitle;

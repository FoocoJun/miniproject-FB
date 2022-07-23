import React from "react";
import styled from "styled-components";

const SmallTitle = () => {
  return <Text>아침과 밤의 이야기</Text>;
};

const Text = styled.h3`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;

  font-family: "PyeongChangPeace-Bold";
  text-align: right;
  color: #440068;
  //레이아웃 고정 사이즈 Big 쓰는 페이지는 margin-top: 63.03px;
  font-size:1.333rem;
  margin: 18.72px 40px 18.72px 0;
`;

export default SmallTitle;

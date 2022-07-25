import React from "react";
import styled from "styled-components";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SelectPage = () => {
  const topImageBoxRef = React.useRef(null);
  const topImage = React.useRef(null);
  const topText = React.useRef(null);

  const botImageBoxRef = React.useRef(null);
  const botImage = React.useRef(null);
  const botText = React.useRef(null);

  const focusTopImage = () => {
    topImageBoxRef.current.style.height = "100%";
    topImageBoxRef.current.style.backgroundColor = "#440068";
    topText.current.style.display = "inherit";
    topImage.current.style.opacity = "0.5";
  };
  const returnTopImage = () => {
    topImageBoxRef.current.style.height = "80%";
    topImageBoxRef.current.style.backgroundColor = "#DCDCDC";
    topText.current.style.display = "none";
    topImage.current.style.opacity = "1";
  };
  const focusBotImage = () => {
    botImageBoxRef.current.style.height = "100%";
    botImageBoxRef.current.style.backgroundColor = "#440068";
    botText.current.style.display = "inherit";
    botImage.current.style.opacity = "0.5";
  };
  const returnBotImage = () => {
    botImageBoxRef.current.style.height = "80%";
    botImageBoxRef.current.style.backgroundColor = "#DCDCDC";
    botText.current.style.display = "none";
    botImage.current.style.opacity = "1";
  };

  React.useEffect(() => {
    //상단 이미지
    topImageBoxRef.current.addEventListener("mouseover", focusTopImage);
    topImageBoxRef.current.addEventListener("mouseout", returnTopImage);
    topText.current.addEventListener("mouseover", focusTopImage);
    topText.current.addEventListener("mouseout", returnTopImage);
    //하단 이미지
    botImageBoxRef.current.addEventListener("mouseover", focusBotImage);
    botImageBoxRef.current.addEventListener("mouseout", returnBotImage);
    botText.current.addEventListener("mouseover", focusBotImage);
    botText.current.addEventListener("mouseout", returnBotImage);
  }, []);

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
          <ImageBoxLink to={"/fortune/result"} ref={topImageBoxRef}>
            <Image
              ref={topImage}
              src={process.env.PUBLIC_URL + "/imges/1212_01.png"}
              height="70%"
            />
          </ImageBoxLink>
          <TextLink to={"/fortune/result"} ref={topText}>
            띠벌 운세
          </TextLink>
        </div>
        <div
          style={{
            height: "50%",
          }}
        >
          <ImageBoxLink to={"/fortune/result"} ref={botImageBoxRef}>
            <Image
              ref={botImage}
              src={process.env.PUBLIC_URL + "/imges/stella_06.png"}
              height="100%"
            />
          </ImageBoxLink>
          <TextLink to={"/fortune/result"} ref={botText}>
            별자리 운세
          </TextLink>
        </div>
      </div>
    </ComponentBox>
  );
};

// Stlyed Components 적용
const ImageBoxLink = styled(Link)`
  height: 80%;
  width: 90%;
  border-radius: 40px;
  background-color: #dcdcdc;
  //정렬
  display: flex;
  align-items: center;
  justify-content: center;
  //효과
  box-shadow: -2px 4px 5px 3px rgb(189, 189, 189);
  transition: 0.6s;
`;

const TextLink = styled(Link)`
  //정렬
  display: none;
  position: absolute;
  //텍스트
  color: white;
  font-size: 2.5rem;
  font-weight: bolder;
  font-family: "국립박물관문화재단클래식B";
  text-decoration: none;
  text-shadow: 2px 2px 2px black;
  &:hover {
    color: white;
  }
`;

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

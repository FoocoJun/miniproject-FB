import React from "react";
import styled from "styled-components";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ImageBoxStella = () => {
  let sessionStorage = window.sessionStorage;
  const starposition = sessionStorage.getItem("starposition");

  React.useEffect(() => {
    setTimeout(async () => {
      try {
        let ImgInfo = await getDoc(doc(db, "stars", starposition));
        botImage.current.src = ImgInfo.data().imageURL;
      } catch {}
    }, 1);
  }, []);

  const botImageBoxRef = React.useRef(null);
  const botImage = React.useRef(null);
  const botText = React.useRef(null);

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
    botImageBoxRef.current.addEventListener("mouseover", focusBotImage);
    botImageBoxRef.current.addEventListener("mouseout", returnBotImage);
    botText.current.addEventListener("mouseover", focusBotImage);
    botText.current.addEventListener("mouseout", returnBotImage);
  }, []);

  return (
    <>
      <ImageBoxLink to={"/fortune/result"} ref={botImageBoxRef}>
        <Image
          ref={botImage}
          src={process.env.PUBLIC_URL + "/imges/card_bg.png"}
          height="100%"
        />
      </ImageBoxLink>
      <TextLink to={"/fortune/result"} ref={botText}>
        별자리 운세
      </TextLink>
    </>
  );
};

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

export default ImageBoxStella;

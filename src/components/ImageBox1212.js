import React from "react";
import styled from "styled-components";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ImageBox1212 = () => {
  //구현전 예시
  const zodiacsign = "HORSE";

  React.useEffect(() => {
    setTimeout(async () => {
      try {
        let ImgInfo = await getDoc(doc(db, "zodiac", zodiacsign));
        topImage.current.src = ImgInfo.data().imageURL;
        setTimeout(() => {
          topImage.current.style.height = "70%";
          //별자리에 비해 이미지가 커서 하향조정
        }, 220);
      } catch {}
    }, 1);
  }, []);

  const topImageBoxRef = React.useRef(null);
  const topImage = React.useRef(null);
  const topText = React.useRef(null);

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

  React.useEffect(() => {
    //상단 이미지
    topImageBoxRef.current.addEventListener("mouseover", focusTopImage);
    topImageBoxRef.current.addEventListener("mouseout", returnTopImage);
    topText.current.addEventListener("mouseover", focusTopImage);
    topText.current.addEventListener("mouseout", returnTopImage);
  }, []);

  return (
    <>
      <ImageBoxLink to={"/fortune/result"} ref={topImageBoxRef}>
        <Image
          ref={topImage}
          src={process.env.PUBLIC_URL + "/imges/card_bg.png"}
          height="100%"
        />
      </ImageBoxLink>
      <TextLink to={"/fortune/result"} ref={topText}>
        띠벌 운세
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

export default ImageBox1212;

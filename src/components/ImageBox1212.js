import React from "react";
import styled from "styled-components";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ImageBox1212 = () => {
  const zodiacsign = "HORSE";
  React.useEffect(() => {
    try {
      switch (zodiacsign) {
        case "RAT": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_01.png";
          return;
        }
        case "COW": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_02.png";
          return;
        }
        case "TIGER": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_03.png";
          return;
        }
        case "RABBIT": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_04.png";
          return;
        }
        case "DRAGON": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_05.png";
          return;
        }
        case "SNAKE": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_06.png";
          return;
        }
        case "HORSE": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_07.png";
          return;
        }
        case "SHEEP": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_08.png";
          return;
        }
        case "MONKEY": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_09.png";
          return;
        }
        case "CHICKEN": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_10.png";
          return;
        }
        case "DOG": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_11.png";
          return;
        }
        case "PIG": {
          topImage.current.src=process.env.PUBLIC_URL + "/imges/1212_12.png";
          return;
        }

        default:
          return;
      }
    } catch {}
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
          src={process.env.PUBLIC_URL + "/imges/1212_03.png"}
          height="70%"
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

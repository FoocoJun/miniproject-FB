import React from "react";
import { useNavigate } from "react-router-dom";

import Typed from "react-typed";
import styled from "styled-components";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartingPage = () => {
  const navigate = useNavigate();
  const textLines1 = ["우리의 이야기"];
  const textLines2 = ["그리고 당신의 이야기"];
  const textTitle = ["아침과 밤의 이야기"];

  const buttonRef = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      buttonRef.current.style.display = "inline-block";
    }, 4500);
  }, []);

  return (
    <>
      <StartingBox>
        <Typed
          strings={textLines1}
          typeSpeed={80}
          loop={false}
          showCursor={false}
        />
        <Typed
          strings={textLines2}
          typeSpeed={80}
          startDelay={1500}
          loop={false}
          showCursor={false}
        />
        <br />
        <Typed
          strings={textTitle}
          typeSpeed={80}
          startDelay={3200}
          loop={false}
          showCursor={false}
        />
        <BigButton ref={buttonRef} onClick={() => navigate("/fortune")}>
          <FontAwesomeIcon icon={faPlay} size={"1x"} />
        </BigButton>
      </StartingBox>
    </>
  );
};

const StartingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  appearance: center;
  height: 100vh;

  text-align: center;
  font-size: 2.7rem;
  font-family: PyeongChangPeace-Bold;
  color: whitesmoke;
  text-shadow: 2px 2px 2px grey;
  @media (max-width: 500px) {

      font-size: 10vw;

  }
`;

const BigButton = styled.button`
  margin: 25px auto 0;
  display: none;
  height: 40px;
  width: 128px;
  font-size:1.9rem;

  background: #440068;
  color: #fff;

  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 1px 1px gray;

  &:hover {
    background: #440040;
  }
`;

export default StartingPage;

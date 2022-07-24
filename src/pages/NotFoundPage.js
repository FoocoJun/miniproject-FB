import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NotFoundMessage>
        잘못된 접근입니다.<SmallButton onClick={()=>navigate('/fortune')}>Main</SmallButton>
      </NotFoundMessage>
    </>
  );
};

const NotFoundMessage = styled.h1`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #440068;
  font-weight: bolder;
  font-family: "국립박물관문화재단클래식B";
  text-shadow: 2px 2px 2px grey;
`;

const SmallButton = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: bolder;
  background: #440068;
  color: #fff;
  border-radius: 20px;
  text-align: center;
`;

export default NotFoundPage;

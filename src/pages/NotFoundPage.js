import React from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  return <NotFoundMessage>잘못된 접근입니다.</NotFoundMessage>;
};

const NotFoundMessage = styled.h1`
display:flex;
justify-content:center;
`

export default NotFoundPage;

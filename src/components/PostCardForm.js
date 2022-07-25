import React from "react";

// 스타일 관련 라이브러리 연결
// import styled from "styled-components";
import Card from "react-bootstrap/Card";

const PostCardForm = () => {
  return (
    <Card
      border="warning"
      id="post_card"
      style={{
        width: "16rem",
        height: "22rem",
        margin: "50px 25px 25px 25px"
      }}
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Warning Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCardForm;

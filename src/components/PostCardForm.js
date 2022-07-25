import React from "react";
import Col from "react-bootstrap/Col";

// 스타일 관련 라이브러리 연결
// import styled from "styled-components";
import Card from "react-bootstrap/Card";

const PostCardForm = () => {
  return (
    <Col xs={12} md={6} lg={4} className="g-4">
      {/* PostCard Box */}
      <Card
        style={{
          width: "16rem",
          height: "22rem",
          margin: "auto",
          borderRadius: "30px",
          textAlign: "center",
        }}
      >
        {/* 날짜 */}
        <Card.Header
          style={{
            border: "none",
            borderBottom: "none",
            backgroundColor: "transition",
          }}
        >
          7월 22일
        </Card.Header>

        <Card.Body
          style={{
            width: "90%",
            overflow: "hidden",
            margin: "10% auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* 운세 결과 */}
          <Card.Title
            style={{
              width: "100%",
              height: "30%",
              fontFamily: "국립박물관문화재단클래식B",
              color: "#10305F",
              fontSize: "0.9em",
 
            }}
          >
           .때리면 즐거울거야.거야.때리면 즐거울거야.
          </Card.Title>

          {/* 일기 */}
          <Card.Text
            style={{
              width: "100%",
              fontFamily: 'LeeSeoyun'
              
            }}
          >
            거야.때리면 즐거울거야.때리면 즐거울거야.때리면 즐거울거야.때리면 즐거울거야.때리면 즐거울거야.때리면 즐거울거야.때리면 즐거울거야.s
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostCardForm;

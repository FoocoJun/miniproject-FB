import React from "react";
import Col from "react-bootstrap/Col";

// 스타일 관련 라이브러리 연결
// import styled from "styled-components";
import Card from "react-bootstrap/Card";

const PostCardForm = ({idx, arrayLength}) => {
  const cardRef = React.useRef();
  const cardReturn0 = () => {
    cardRef.current.style.backgroundColor="rgba(255,255,255)"
  }
  const cardReturn1 = () => {
    cardRef.current.style.backgroundColor=`rgba(255,255,255,${(arrayLength-idx)/arrayLength})`
  }

  React.useEffect(()=>{
    cardRef.current.addEventListener("mouseover",cardReturn0)
    cardRef.current.addEventListener("mouseout",cardReturn1)
  },[])

  return (
    <Col xs={12} md={6} lg={3} className="g-4">
      <div
          style={{
            width: "15rem",
            margin: "auto",
            lineHeight: "0",
            border: "none",
            borderBottom: "none",
            padding: "5% 0",
            fontSize: "1rem",
            color: "#fff",
            fontFamily: "양진체"
          }}
        >
          7월 22일
        </div>
      {/* PostCard Box */}
      <Card
        style={{
          width: "85%",
          maxWidth: "270px",
          height: "22rem",
          margin: "auto",
          borderRadius: "30px",
          textAlign: "center",
          backgroundColor: `rgba(255,255,255,${(arrayLength-idx)/arrayLength})`
        }}
        ref={cardRef}
      >
        {/* 날짜 */}
        {/* <Card
          style={{
            border: "none",
            borderBottom: "none",
            padding: "5% 0",
            fontSize: "0.8rem",
            color: "#4B4453",
            fontFamily: '양진체'
          }}
        >
          7월 22일
        </Card> */}

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
              wordBreak: "keep-all"
 
            }}
          >
            오늘은 횡단보도를 건널 때 각별히 조심하도록 해 !
          </Card.Title>

          {/* 일기 */}
          <Card.Text
            style={{
              width: "100%",
              height: "50%",
              fontFamily: "LeeSeoyun",
              wordBreak: "keep-all",
              textDecoration: "underline",
              textUnderlinePosition:"under"
            }}
          >
            오늘 출근길과 퇴근길에 조심해서 횡단보도를 건넜더니, 안전하게 집까지 올 수 있었다...세상에.. 정말 용하다....^^*
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostCardForm;

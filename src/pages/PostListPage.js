import React from "react";

import { Row, Container } from "react-bootstrap";

import PostCardForm from "../components/PostCardForm";

const PostListPage = () => {
  return (
    <Container>
      {/* <ListBox> */}
      <Row style={{paddingTop:"50px"}}>
        {Array(24).fill(0).map((val, idx)=>{
          return(<PostCardForm key={'PostCardForm'+idx} idx={idx}/>)
        })}
      </Row>
      {/* </ListBox> */}
    </Container>
  );
};

export default PostListPage;

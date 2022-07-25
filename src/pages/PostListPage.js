import React from "react";

import { Row, Container } from "react-bootstrap";

import PostCardForm from "../components/PostCardForm";

const PostListPage = () => {
  return (
    <Container>
      {/* <ListBox> */}
      <Row style={{paddingTop:"50px"}}>
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
      </Row>
      {/* </ListBox> */}
    </Container>
  );
};

export default PostListPage;

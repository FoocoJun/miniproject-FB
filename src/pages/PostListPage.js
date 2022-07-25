import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";

import PostCardForm from "../components/PostCardForm";

const PostListPage = () => {
  return (
    <ListBox>
      <Row xs={1} md={2} lg={4} className="g-4">
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
      </Row>
      <Row xs={1} md={2} lg={4} className="g-4">
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
        <PostCardForm />
      </Row>
    </ListBox>
  );
};

const ListBox = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export default PostListPage;

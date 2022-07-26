import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { Row, Container } from "react-bootstrap";

import PostCardForm from "../components/PostCardForm";

const PostListPage = () => {
  const userData = useSelector((state) => state.users.userData);
  console.log(userData)
  return (
    <Container>
      {/* <ListBox> */}
      <Row style={{paddingTop:"50px"}}>
        {Array(12).fill(0).map((val, idx, array)=>{
          return(<PostCardForm key={'PostCardForm'+idx} idx={idx} arrayLength={array.length}/>)
        })}
      </Row>
      {/* </ListBox> */}
    </Container>
  );
};

export default PostListPage;

import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { Row, Container } from "react-bootstrap";

import PostCardForm from "../components/PostCardForm";
import axios from "axios";

const PostListPage = () => {
  const userData = useSelector((state) => state.users.userData);
  const [listData, setListData] = React.useState([]);
  React.useEffect(() => {
    axios("/user/list").then((res) => {
      setListData(res.data)
    });
  },[]);

  return (
    <Container>
      {/* <ListBox> */}
      <Row style={{ paddingTop: "50px" }}>
        {listData
          .map((val, idx, array) => {
            return (
              <PostCardForm
                key={"PostCardForm" + idx}
                idx={idx}
                arrayLength={array.length}
                val={val}
              />
            );
          })}
      </Row>
      {/* </ListBox> */}
    </Container>
  );
};

export default PostListPage;

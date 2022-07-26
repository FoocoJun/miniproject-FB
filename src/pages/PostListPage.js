import React from "react";

import { Row, Container } from "react-bootstrap";

import PostCardForm from "../components/PostCardForm";

const PostListPage = () => {
  return (
    <Container>
      {/* <ListBox> */}
      <Row style={{paddingTop:"50px"}}>
        {Array(12).fill(0).map((val, idx, array)=>{
          return(<PostCardForm key={'PostCardForm'+idx} idx={idx} arrayLength={array.length}/>)
          //3번째 매개변수로 사용된 배열 array를 제공하여 그 배열의 길이를 컴포넌트에 전했습니다.
          //배열의 길이로 투명도의 변화도를 조절하였습니다. ${(arrayLength-idx)/arrayLength}
          //이 경우 첫번째 카드는 투명도가 0, 마지막 카드는 투명도가 100%보단 낮은 수가 됩니다.
          //length는 1부터 시작하고 idx는 0부터 시작하기 때문입니다.
          //마지막 카드 투명도 예시
          //1개일 때 1-0/1 = 1, 2개일 때 2-1/2 = 0.5, 50개일 때 50-49/50 = 0.02
          //**확인 후 주석 삭제하시면 됩니다.**
        })}
      </Row>
      {/* </ListBox> */}
    </Container>
  );
};

export default PostListPage;

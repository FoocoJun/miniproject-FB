import React from "react";

import styled from "styled-components";

import {useNavigate} from "react-router-dom";

const PostPage = () => {
    const navigate = useNavigate();
    

  return (
    <ComponentBox>
        <Title> 밤의 이야기 </Title>
            <PostBox>

                <FortuneTextBox>
                    {/* 운세글 get */}
                    <FortuneText> 아침에 옆사람 뒷통수를 <br /> 때리면 즐거울거야. </FortuneText>
                </FortuneTextBox>

                <InputStyle rows="3" cols="20" wrap="hard"  placeholder="내용을 입력하세요."/>

                {/* 작성 버튼 */}
                <MediumButton onClick={() => navigate("/user/list")}> 작성하기 </MediumButton>

            </PostBox>
            
    </ComponentBox>
  )
}

const ComponentBox = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 63.03px 0px 0;
`;
const Title = styled.h1`
  font-family: "PyeongChangPeace-Bold";
  color: #440068;
`;
const PostBox = styled.form`
    width: 75%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const FortuneTextBox = styled.div`
    width: 100%;
    height: 30%;

    color: #10305F;
`;
const FortuneText = styled.h3`
    font-size: 1rem;
    text-align: center;
    font-family: '국립박물관문화재단클래식B';
`;
const InputStyle = styled.textarea`
    width: 100%;
    height: 70%;
    border: 1px solid #eee;
    box-shadow: -2px 4px 5px rgb(189, 189, 189);
    border-radius: 2rem;
    box-sizing: border-box;
    padding: 10%;
    resize: none;
    margin-bottom: 8%;
    font-family: LeeSeoyun;
`;
const MediumButton = styled.button`
  width: 80%;
  height: 30%;
  font-size: 1.5rem;
  font-weight: bolder;
  background: #440068;
  color: #fff;
  border-radius: 20px;
`;


export default PostPage;
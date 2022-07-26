import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  const navigate = useNavigate();

  // const uploadURL = () => {
  //   const zodiac = [
  //     "RAT",
  //     "COW",
  //     "TIGER",
  //     "RABBIT",
  //     "DRAGON",
  //     "SNAKE",
  //     "HORSE",
  //     "SHEEP",
  //     "MONKEY",
  //     "CHICKEN",
  //     "DOG",
  //     "PIG",
  //   ];
  //   const stars = [
  //     "AQUARIUS",
  //     "PISCES",
  //     "ARIES",
  //     "TAURUS",
  //     "GEMINI",
  //     "CANOER",
  //     "LEO",
  //     "VIRGO",
  //     "LIBRA",
  //     "SCORPIUS",
  //     "SAGITTARIUS",
  //     "CAPRICORNUS",
  //   ];

    // stars.map( async(val, idx) => {
    //   idx = idx + 1 + "";
    //   idx = idx.split("").length == 1 ? 0 + idx : idx;
    //   console.log(idx);
    //   let tmpPost= {
    //     imageURL: '',
    //     imageName: `stars/stella_${idx}`,
    //     imageTitle: val,
    //   }
    //   let ImagesRef = ref(storage, `stars/stella_${idx}.png`);
    //   await getDownloadURL(ImagesRef).then((url) => {
    //     tmpPost.imageURL = url;
        
    //     //tmp_post의 img에 url추가
    //   });
    //   console.log(tmpPost)
    //   await setDoc(doc(db, "stars", val), tmpPost).then(()=>console.log('성공'));
      

  //   });
  // };

  return (
    <>
      <NotFoundMessage>
        잘못된 접근입니다.
        {/* <SmallButton onClick={() => navigate("/fortune")}>Main</SmallButton> */}
        <SmallButton onClick={()=>navigate('/fortune')}>Main</SmallButton>
      </NotFoundMessage>
    </>
  );
};

const NotFoundMessage = styled.h1`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #440068;
  font-weight: bolder;
  font-family: "국립박물관문화재단클래식B";
  text-shadow: 2px 2px 2px grey;
`;

const SmallButton = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: bolder;
  background: #440068;
  color: #fff;
  border-radius: 20px;
  text-align: center;
`;

export default NotFoundPage;

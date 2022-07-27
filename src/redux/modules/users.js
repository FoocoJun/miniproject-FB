import axios from "axios";

// Actions
const KEEP = "user/KEEP";
const UPDATE = "user/UPDATE";

const initialState = {
  userData: { nickname: "", starposition: "", zodiacsign: "", checkdiary: false },
};

export function keepUserData(userData) {
  return { type: KEEP, userData };
}
export function updateUserData(userData) {
  return { type: UPDATE, userData };
}

//middlewares
//로그인 입력값(userData)을 받아 로그인 후 로그인 정보를 로그인 데이타(userData)에 저장
export const keepUserDataMW = (userData, navigate) => {
  return async function (dispatch) {
    axios({
      method: "post",
      url: "/user/signin",
      data: userData,
    })
      .then((Response) => {
        userData = { ...Response.data };
        dispatch(keepUserData(userData));
        let sessionStorage = window.sessionStorage;
        sessionStorage.setItem("nickname", userData.nickname);
        sessionStorage.setItem("starposition", userData.starposition);
        sessionStorage.setItem("zodiacsign", userData.zodiacsign);
        sessionStorage.setItem("checkdiary", userData.checkdiary);
        navigate("/fortune");
        
      })
      .catch(() => {
        alert(`
      아이디 또는 비밀번호를 잘못 입력했습니다.
      입력하신 내용을 다시 확인해주세요.
      `);
      });
  };
};

export const loadSessionDataMW = () => {
  return async function (dispatch) {
    let sessionStorage = window.sessionStorage;
    let userData = {
      nickname: sessionStorage.getItem("nickname"),
      starposition: sessionStorage.getItem("starposition"),
      zodiacsign: sessionStorage.getItem("zodiacsign"),
      checkdiary: sessionStorage.getItem("checkdiary"),
      fortune: sessionStorage.getItem("fortune"),
    };
    dispatch(keepUserData(userData));
  };
};

export default function reducer(state = initialState, action = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "user/KEEP": {
      return { userData: action.userData };
    }
    case "user/UPDATE": {
      let newUserData = {...state.userData, checkdiary:true }
      return { userData: newUserData };
    }
    // do reducer stuff
    default:
      return state;
  }
}

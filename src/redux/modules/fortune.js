const CREATE = "fotune/CREATE";
const RESULT = "fotune/RESULT";

const initialState = {
  fortune: "",
};

export function createFotunePostCard(FotunePostCard) {
  return { type: CREATE, FotunePostCard };
}

export function keepFortuneResult(fortune) {
  let sessionStorage = window.sessionStorage;
  sessionStorage.setItem("fortune", fortune);
  return { type: RESULT, fortune };
}

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case "fortune/RESULT": {
      return { fortune: action.fortune };
    }
    default:
      return state;
  }
}

// 미들웨어 ( 서버랑 통신할 때 필요함 )
// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }

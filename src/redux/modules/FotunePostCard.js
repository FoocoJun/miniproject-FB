
// Actions
// const LOAD = 'my-app/widgets/LOAD'; 서버에서 데이터 가지고 올 때 사용.
const CREATE = 'FotunePostCard/CREATE';


// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';


// Action Creators
// export function loadWidgets() {
// return { type: LOAD };
// }

export function createFotunePostCard(FotunePostCard) {
return { type: CREATE, FotunePostCard };
}

export function updateWidget(widget) {
return { type: UPDATE, widget };
}

export function removeWidget(widget) {
return { type: REMOVE, widget };
}

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
    // do reducer stuff
    default: return state;
    }
    }


// 미들웨어 ( 서버랑 통신할 때 필요함 )
// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }

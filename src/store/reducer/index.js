// import { combineReducers } from 'redux';
// import { couter } from './index.redux';  //项目中需要的reducer
// import { auth } from './Auth.redux';   //项目中需要的reducer
// export default combineReducers({couter,auth})

export function decorationDetailData(state = {name: 'init'}, action) {
    console.log(action);
    // return Immutable.merge(state, action.payload || {});
    // return state.merge(action.payload || {}, {deep: true});
    if (action.type == 'name') {
        return {
            name: action.name
        }
    }
    return state
}

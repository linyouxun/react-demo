// import { combineReducers } from 'redux';
// import { couter } from './index.redux';  //项目中需要的reducer
// import { auth } from './Auth.redux';   //项目中需要的reducer
// export default combineReducers({couter,auth})
import {TODOLISTGETLIST, TODOLISTADD, TODOLISTCHANGE, TODOLISTDELETE} from '../action'
const defaultState = {name: 'init'}
export function decorationDetailData(state = defaultState, action) {
    console.log(action);
    // return Immutable.merge(state, action.payload || {});
    // return state.merge(action.payload || {}, {deep: true});
    if (action.type === 'init') {
        return {
            name: action.name
        }
    }
    return state
}

const defaultToduListState = {
    inputValue: 'default',
    list: [
        'list1',
        'list2'
    ]
}
export function todoListState(state = defaultToduListState, action) {
    if (action.type === TODOLISTGETLIST) {
        const tmpState = JSON.parse(JSON.stringify(state));
        tmpState.list = action.list;
        return tmpState;
    }
    if (action.type === TODOLISTADD) {
        const tmpState = JSON.parse(JSON.stringify(state));
        tmpState.list.push(action.value)
        return tmpState;
    }
    if (action.type === TODOLISTCHANGE) {
        state.list.push(action.value)
    }
    if (action.type === TODOLISTDELETE) {
        const tmpState = JSON.parse(JSON.stringify(state));
        tmpState.list.splice(action.index, 1)
        return tmpState
    }
    return state
}

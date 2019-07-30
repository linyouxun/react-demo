import { createStore, combineReducers } from 'redux';
import { decorationDetailData, todoListState } from './reducer'

 // 创建数据存储仓库

let store = createStore(combineReducers({
    decorationDetailData,
    todoListState
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // 创建数据存储仓库
export default store; // 暴露出去
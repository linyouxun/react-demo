import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { decorationDetailData, todoListState } from './reducer'
import thunk from 'redux-thunk';

const customMiddleware = ({getState}) => next => action => {
    console.log('start ', getState())
    const ret = next(action);
    console.log('end ', getState())
    return ret;
}

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, customMiddleware))


 // 创建数据存储仓库

let store = createStore(combineReducers({
    decorationDetailData,
    todoListState
// }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // 创建数据存储仓库
}), enhancer); // 创建数据存储仓库
export default store; // 暴露出去
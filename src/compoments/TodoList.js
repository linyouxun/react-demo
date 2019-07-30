import React, { createRef } from 'react';
// import { connect } from 'react-redux';
import './TodoList.css'
import store from '../store';
import { todolistAdd, todolistDelete } from '../store/action'


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.storeChange = this.storeChange.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        const { decorationDetailData, todoListState } = store.getState();
        this.state = {
            decorationDetailData,
            todoListState
        }
        this.static = {
            inputValue: ''
        }
        this.dispatch = store.dispatch;
        this.inputRef = createRef();
        store.subscribe(this.storeChange)
    }
    inputChange(e) {
        this.static.inputValue = e.target.value;
    }
    storeChange(e) {
        const { todoListState } = store.getState();
        this.setState({
            todoListState
        })
    }
    add() {
        this.dispatch(todolistAdd(this.static.inputValue))
        this.static.inputValue = '';
        this.inputRef.current.value = '';
    }
    delete(e) {
        const { index } = e.target.dataset;
        this.dispatch(todolistDelete(index))
    }
    render() {
        const { todoListState } = this.state;
        return <div className="todo-list">
            <div className='input-block'>
                <input ref={this.inputRef} placeholder='搜索内容' onChange={this.inputChange}/>
                <span onClick={this.add}>提交</span>
            </div>
            <div className='list-block'>
                {todoListState.list.map((item, index) => {
                    return <div className="list-item" key={index}>
                        {index + 1}: {item} <div className="delete-btn" data-index={index} onClick={this.delete}>delete</div>
                    </div>
                })}
            </div>
        </div>
    }

}

// TodoList = connect(TodoList);
export default TodoList
import React, { createRef } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './TodoList.css'
import { todolistGetList, todolistGetList2, todolistAdd, todolistDelete } from '../store/action'

const TodoListUI = ({todoListState, event, inputRef}) => {
    return <div className="todo-list">
        <div className='input-block'>
            <input ref={inputRef} placeholder='搜索内容' onChange={event.inputChange}/>
            <span onClick={event.add}>提交</span>
        </div>
        <div className='list-block'>
            {todoListState.list.map((item, index) => {
                return <div className="list-item" key={index}>
                    {index + 1}: {item} <div className="delete-btn" data-index={index} onClick={event.delete}>delete</div>
                </div>
            })}
        </div>
    </div>
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.storeChange = this.storeChange.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.static = {
            inputValue: ''
        }
        this.inputRef = createRef();
    }
    inputChange(e) {
        this.static.inputValue = e.target.value;
    }
    storeChange(e) {
        
    }
    add() {
        this.props.add(this.static.inputValue);
        this.static.inputValue = '';
        this.inputRef.current.value = '';
    }
    delete(e) {
        const { index } = e.target.dataset;
        this.props.delete(index);
    }
    componentDidMount() {
        this.props.list();
    }
    render() {
        const { todoListState } = this.props;
        return <TodoListUI
            todoListState={todoListState}
            event={{
                inputChange: this.inputChange,
                add: this.add,
                delete: this.delete,
            }}
            inputRef={this.inputRef}
        />
    }

}

const stateTpProps = (state) => {
    return {
        decorationDetailData: state.decorationDetailData,
        todoListState: state.todoListState,
    }
}

const dispatchTpProps = (dispatch) => {
    return {
        storeChange(e) {
        
        },
        add(value) {
            dispatch(todolistAdd(value))
        },
        delete(index) {
            dispatch(todolistDelete(index))
        },
        list() {
            dispatch(todolistGetList2())
        }
    }
}

TodoList = connect(stateTpProps, dispatchTpProps)(TodoList);
export default TodoList
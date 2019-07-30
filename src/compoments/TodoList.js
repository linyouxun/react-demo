import React from 'react';
import 'TodoList.css'


class TodoList extends React.Component {
    render() {
        return <div className="todo-list">
            <div className='input-block'>
                <input placeholder='搜索内容'/>
            </div>
            <div className='list-block'>

            </div>
        </div>
    }

}

export default TodoList
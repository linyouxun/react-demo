// import store from '../'
import axios from 'axios';
export const TODOLISTGETLIST = 'todolist-get-list';
export const TODOLISTADD = 'todolist-add';
export const TODOLISTCHANGE = 'todolist-change';
export const TODOLISTDELETE = 'todolist-delete';

export const todolistAdd = (value) => ({
    type: TODOLISTADD,
    value
})
export const todolistChange = (data) => ({
    type: TODOLISTCHANGE,
    data: data
})
export const todolistDelete = (index) => ({
    type: TODOLISTDELETE,
    index
})
export const todolistGetList = (list) => ({
    type: TODOLISTGETLIST,
    list
})

export const todolistGetList2 = () => {
    return (dispatch) => {
        axios.get('http://47.106.174.88:8080/api/app/mock/24/test/api').then((res)=>{
            console.log(res.data);
            if (res.data.code === 200) {
                dispatch(todolistGetList(res.data.data.list))
            } else {
                dispatch(todolistGetList([]))
            }
        })
    }
}


// import store from '../'
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
import store from '../'

export const switchUser = (data) => {
    console.log("switchUser()",data);
    return () => {
        store.dispatch({
            type: 'init',
            ...data
        })
    }
}
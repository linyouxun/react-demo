import React from 'react';
import { connect } from 'react-redux';
import { switchUser } from '../store/action'

class ReduxA extends React.Component {
    constructor() {
        super()
        console.log('ReduxA')
    }
    dispatchA = () => {
        this.props.dispatch({
            type: 'init',
            name: 'redux'
        })
    }
    render() {
        console.log(this.props)
        return <div>
            ReduxA
            <div onClick={this.dispatchA}>
                dispatchA
            </div>
            <div onClick={this.props.setName({name: 'test'})}>
                setName
            </div>
            {this.props.children}
        </div>
    }
}

// export default ReduxA;
//配置代码，通过connect将组件和store连接起来
let mapStateToProps = (state) => ({
    // userInfo: {...state.redUserInfo}
})

let mapDispatchToProps = (dispatch) => {
    debugger
    return ({
        dispatch,
        setName: switchUser
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxA)
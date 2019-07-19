import React from 'react';
import { connect } from 'react-redux';

class ReduxB extends React.Component {
    constructor() {
        super()
        console.log('ReduxB')
    }
    render() {
        console.log(this.props)
        return <div>
            ReduxB
            {this.props.children}
        </div>
    }
}

// export default ReduxA;
//配置代码，通过connect将组件和store连接起来
let mapStateToProps = (state) => {
    console.log(state);
    return ({
        // userInfo: {...state.redUserInfo}
    })
}

let mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxB)
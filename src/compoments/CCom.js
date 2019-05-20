import React from 'react';

class CCom extends React.Component {
    constructor() {
        super()
        console.log('CCom')
    }
    componentDidMount() {
        console.log('componentDidMount Ccom');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate Ccom');
        return true
    }
    componentWillUnmount() {
        console.log('componentWillUnmount Ccom');
    }
    render() {
        return <div>
            CCom
            {this.props.children}
        </div>
    }
}

export default CCom;
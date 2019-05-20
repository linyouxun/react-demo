import React from 'react';

class ACom extends React.Component {
    constructor() {
        super()
        console.log('ACom')
    }
    componentDidMount() {
        console.log('componentDidMount Acom');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate Acom');
        return true
    }
    componentWillUnmount() {
        console.log('componentWillUnmount Acom');
    }
    render() {
        return <div>
            ACom
            {this.props.children}
        </div>
    }
}

export default ACom;
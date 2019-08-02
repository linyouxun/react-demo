import React from 'react';

class ACom extends React.Component {
    constructor() {
        super()
        console.log('ACom')
    }
    componentDidMount() {
        console.log('Acom componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('Acom shouldComponentUpdate');
        return false
    }
    componentWillUnmount() {
        console.log('Acom componentWillUnmount');
    }
    render() {
        console.log('ACom render')
        return <div>
            ACom
            {this.props.children}
        </div>
    }
}

export default ACom;
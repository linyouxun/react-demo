import React from 'react';

class A extends React.PureComponent {
    constructor() {
        super()
        console.log('A')
    }
    componentDidMount() {
        console.log('componentDidMount A');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount A');
    }
    render() {
        return <div>
            A
            {this.props.children}
        </div>
    }
}

export default A;
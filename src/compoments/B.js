import React from 'react';

class B extends React.PureComponent {
    constructor() {
        super()
        console.log('B')
    }
    componentDidMount() {
        console.log('B componentDidMount');
    }
    componentWillUnmount() {
        console.log('B componentWillUnmount');
    }
    render() {
        console.log('B render')
        return <div style={{border: '1px'}}>
            B
            {this.props.children}
        </div>
    }
}

export default B;
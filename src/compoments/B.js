import React from 'react';

class B extends React.PureComponent {
    constructor() {
        super()
        console.log('B')
    }
    componentDidMount() {
        console.log('componentDidMount B');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount B');
    }
    render() {
        return <div>
            B
            {this.props.children}
        </div>
    }
}

export default B;
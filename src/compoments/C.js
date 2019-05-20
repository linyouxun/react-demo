import React from 'react';

class C extends React.PureComponent {
    constructor() {
        super()
        console.log('C')
    }
    componentDidMount() {
        console.log('componentDidMount C');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount C');
    }
    render() {
        return <div>
            C
            {this.props.children}
        </div>
    }
}

export default C;
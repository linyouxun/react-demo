import React from 'react';

class BCom extends React.Component {
    constructor() {
        super()
        console.log('BCom')
    }
    componentDidMount() {
        console.log('Bcom componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('Bcom shouldComponentUpdate');
        return true
    }
    componentWillUnmount() {
        console.log('Bcom componentWillUnmount');
    }
    render() {
        console.log('BCom render', this.props.data)
        return <div>
            BCom
            {this.props.children}
        </div>
    }
}

export default BCom;
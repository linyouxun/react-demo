import React from 'react';

class BCom extends React.Component {
    constructor() {
        super()
        console.log('BCom')
    }
    componentDidMount() {
        console.log('componentDidMount Bcom');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate Bcom');
        return true
    }
    componentWillUnmount() {
        console.log('componentWillUnmount Bcom');
    }
    render() {
        return <div>
            BCom
            {this.props.children}
        </div>
    }
}

export default BCom;
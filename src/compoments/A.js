import React from 'react';

class A extends React.Component {
    constructor() {
        super()
        console.log('A')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState)
    }
    
    componentWillUpdate(prevProps, prevState) {
        console.log('componentWillUpdate', prevProps, prevState)
    }
    shouldComponentUpdate(prevProps, prevState) {
        console.log('shouldComponentUpdate', prevProps, prevState)
        return true;
    }
    componentDidMount() {
        console.log('componentDidMount A');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount A');
    }
    render() {
        console.log(this.props)
        return <div>
            A
            {this.props.children}
        </div>
    }
}

export default A;
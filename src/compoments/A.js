import React from 'react';

class A extends React.Component {
    constructor() {
        super()
        console.log('A')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('A componentDidUpdate', prevProps, prevState)
    }
    
    componentWillUpdate(prevProps, prevState) {
        console.log('A componentWillUpdate', prevProps, prevState)
    }
    shouldComponentUpdate(prevProps, prevState) {
        console.log('A shouldComponentUpdate', prevProps, prevState)
        return true;
    }
    componentDidMount() {
        console.log('A componentDidMount');
    }
    componentWillUnmount() {
        console.log('A componentWillUnmount');
    }
    render() {
        // console.log(this.props)
        console.log('A render')
        return <div style={{border: '1px'}}>
            A
            {this.props.children}
        </div>
    }
}

export default A;
import React from 'react';
import { ContextDemoSub } from './';

class ContextDemo extends React.Component {
    constructor() {
        super()
        console.log('ContextDemo')
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
        console.log('componentDidMount ContextDemo');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount ContextDemo');
    }
    render() {
        console.log(this.props)
        return <div>
            ContextDemo
            {/* {this.props.children} */}
            <ContextDemoSub></ContextDemoSub>
        </div>
    }
}

export default ContextDemo;
import React from 'react';

class D extends React.PureComponent {
    constructor() {
        super()
        console.log('D')
    }
    componentDidMount() {
        console.log('componentDidMount D');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount D');
    }
    render() {
        const { name } = this.props;
        return <div>
            D {name || '暂无数据'}
            {this.props.children}
        </div>
    }
}

export default D;
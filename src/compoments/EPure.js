import React from 'react';
import { A } from './';

class EPure extends React.PureComponent {
    state = {
        name: 'E'
    }
    constructor() {
        super()
        console.log('E')
    }
    render() {
        const { count, obj } = this.props;
        const { name } = this.state;
        var s = JSON.stringify(obj)
        console.log(this.props, s)
        return <div>
            EPure
            <br/>
            {count}
            <br/>
            {name}
            {s}
            <br/>
            {this.props.children}
            <br/>
            <br/>
            <A>A</A>
        </div>
    }
}

export default EPure;
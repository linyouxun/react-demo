import React from 'react';

class DCom extends React.Component {
    constructor(props) {
        super()
        console.log('DCom')
    }
    componentDidMount() {
        console.log('componentDidMount DCom');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate DCom');
        return true
    }
    componentWillUnmount() {
        console.log('componentWillUnmount DCom');
    }
    render() {
        const { name, myRef } = this.props;
        console.log(myRef);
        return <div>
            DCom {name || '暂无数据'}
            {this.props.children}
        </div>
    }
}

export default DCom;
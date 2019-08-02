import React from 'react';
import { A, ACom, B, BCom } from './compoments'
import './App.css';

const TYPE = {
  ONE: 1,
  TWO: 2
}

class App extends React.Component {
  state = {
    type: TYPE.ONE,
    list: [1, 2, 3]
  }
  click = () => {
    this.setState({
      type: TYPE.TWO,
      list: [1, 2]
    })
  }
  render() {
    const {list, type} = this.state;
    return (
      <div className="App">
        <A>
          {/* {
            list.map((item, index) => {
              return <BCom key={Math.random() + ''} data={item}>{item}</BCom>
            })
          } */}

          {type === TYPE.ONE ? <BCom data={'1'}>1</BCom> : null}
          {type ? <BCom data={'2'}>2</BCom> : null}
          {type ? <BCom data={'3'}>3</BCom> : null}
        </A>
        <B>
        </B>
        <div onClick={this.click}>change</div>
      </div>
    );
  }
}

export default App;

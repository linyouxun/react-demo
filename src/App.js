import React from 'react';
import { HookDemo } from './compoments'
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
    // const {list, type} = this.state;
    return (
      <div className="App">
        <HookDemo/>
        <div onClick={this.click}>change</div>
      </div>
    );
  }
}

export default App;

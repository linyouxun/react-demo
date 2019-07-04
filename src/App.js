import React from 'react';
// import { E, EPure, Hook } from './compoments'
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
    obj: {
      name: 'test'
    }
  }
  // constructor(props) {
  //   super(props);
  // }
  componentWillUpdate() {
    console.log('componentWillUpdate', this.state)
  }
  componentDidMount() {
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
  }
  clickBtn = () => {
    console.log('clickBtn')
    // const { count, obj } = this.state;
    // obj.name = 'test' + (count + 1);
    // this.setState({
    //   count: count + 1,
    //   obj
    // })
  }
  render() {
    const { count } = this.state;
    // debugger
    // this.setState({
    //   count: 4
    // }, () => {
    //   console.log('log')
    // })
    return (
      <div className="App" onClick={this.clickBtn}>
        {count}
        {/* <E obj={obj}>E</E> */}
        {/* <hr /> */}
        {/* <EPure obj={obj}>EPure</EPure> */}
        {/* <Hook>hook</Hook> */}
      </div>
    );
  }
}

export default App;

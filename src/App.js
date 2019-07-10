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
  divRef = null;
  constructor(props) {
    super(props);
    document.addEventListener('click', function(e) {
      console.log('constructor', e)
    }, true)
    this.divRef = React.createRef();
  }
  componentWillUpdate() {
    console.log('componentWillUpdate', this.state)
  }
  componentDidMount() {
    console.log(this.divRef);
    this.divRef.current.addEventListener('click', function(e) {
      console.log('divRef', e)
    }, false)
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
  }
  clickBtn = (e) => {
    console.log('clickBtn', e)
    // const { count, obj } = this.state;
    // obj.name = 'test' + (count + 1);
    // this.setState({
    //   count: count + 1,
    //   obj
    // })
  }

  clickBtn2 = (e) => {
    // e.stopPropagation();
    console.log('clickBtn2', e)
    // const { count, obj } = this.state;
    // obj.name = 'test' + (count + 1);
    // this.setState({
    //   count: count + 1,
    //   obj
    // })
  }
  clickBtn3 = (e) => {
    // e.stopPropagation();
    console.log('clickBtn3', e)
    // const { count, obj } = this.state;
    // obj.name = 'test' + (count + 1);
    // this.setState({
    //   count: count + 1,
    //   obj
    // })
  }
  clickBtn4 = (e) => {
    console.log('clickBtn4', e)
  }
  clickBtn5 = (e) => {
    console.log('clickBtn5', e)
  }

  clickBtn6 = (e) => {
    console.log('clickBtn6', e)
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
      <div className="App" onClick={this.clickBtn} onClickCapture={this.clickBtn6}>
        {count}
        <div ref={this.divRef} onClick={this.clickBtn2} onClickCapture={this.clickBtn3}> click </div>
        <div onClick={this.clickBtn4} onClickCapture={this.clickBtn5}> click2 </div>
        {/* <E obj={obj}>E</E> */}
        {/* <hr /> */}
        {/* <EPure obj={obj}>EPure</EPure> */}
        {/* <Hook>hook</Hook> */}
      </div>
    );
  }
}

export default App;

import React from 'react';

class StateDemo extends React.Component {
  state = {
    count: 0
  }
  clickBtn = () => {
    this.forceUpdate(function(provProps, provState) {
      console.log('forceUpdate', provProps, provState);
    })
    this.setState({
      count: this.state.count + 1
    }, (d, d2) => {
      console.log('1', d, d2)
    })
    this.setState({
      count: this.state.count + 1
    }, (d, d2) => {
      console.log('2', d, d2)
    })
    this.setState((preState, d2) => {
      console.log(preState, d2)
      return {
        count: preState.count + 1
      }
    })
    this.setState((preState, d2) => {
      console.log(preState, d2)
      return {
        count: preState.count + 1
      }
    })
  }

  shouldComponentUpdate(provProps, provState) {
    console.log('shouldComponentUpdate');
    const { count } = this.state;
    console.log(provProps, provState, count);
    return true;
  }

  // componentWillUpdate(provProps, provState) {
  //   console.log('componentWillUpdate');
  //   const { count } = this.state;
  //   console.log(provProps, provState, count);
  //   // if (count < 10) {
  //   //   this.setState({
  //   //     count: count + 1
  //   //   })
  //   //   // this.setState((preState, d2) => {
  //   //   //   console.log(preState, d2)
  //   //   //   return {
  //   //   //     count: preState.count + 1
  //   //   //   }
  //   //   // })
  //   // }
  // }
  
  componentDidUpdate(provProps, provState) {
    console.log('componentDidUpdate');
    const { count } = this.state;
    console.log(provProps, provState, count);
  //   if (count < 10) {
  //     this.setState({
  //       count: count + 1
  //     })
  //     // this.setState((preState, d2) => {
  //     //   console.log(preState, d2)
  //     //   return {
  //     //     count: preState.count + 1
  //     //   }
  //     // })
  //   }
  }


  render() {
    const { count } = this.state;
    return (
      <div>
        demo {count}
        <div onClick={this.clickBtn}>click</div>
      </div>
    );
  }
}

export default StateDemo;

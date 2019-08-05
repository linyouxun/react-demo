import React, { useState } from 'react';
import { Hook } from './';

class ErrorBoundary2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: null,
      };
  }

  componentDidCatch(error, info) {
      alert('1111')
      this.setState({
          error
      });

      // 设置崩溃以后显示的UI
      // 上传错误日志
  }

  render() {

      if (this.state.error) { // 如果页面崩溃，则显示下面的UI
          return (
              <div style={{justifyContent: 'center', alignItems: 'center'}}>
                  <div style={{color: 'red'}}>
                      {this.state.error && this.state.error.toString()}
                  </div>

              </div>
          );
      }
      return this.props.children;
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
  if (this.state.errorInfo) {
    // Error path
    return (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
        {this.state.error && this.state.error.toString()}
        <br />
        {this.state.errorInfo.componentStack}
        </details>
      </div>
    );
  }
  // Normally, just render children
  return this.props.children;
  }
}


class BuggyCounter extends React.Component {
  constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      this.setState(({counter}) => ({
          counter: counter + 1
      }));
  }
  
  render() {
      if (this.state.counter === 5) {
          // Simulate a JS error
          throw new Error('I crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function BuggyCounterFun() {
  let [counter, setCounter] = useState(0);
  const click = () => {
    setCounter(counter + 1);
  }
  if (counter === 5) {
      throw new Error('I crashed!');
  }
  return <h1 onClick={click}>{counter}</h1>
}

class App extends React.Component {
  state = {
    type: 1,
    t: 1
  }
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onClickToRef = this.onClickToRef.bind(this);
    this.divRef = React.createRef()
  }
  onClick(type) {
    this.setState({
      [type]: 1 
    })
  }
  onClickToRef() {
    this.setState({
      type: 2
    })
  }
  componentDidMount() {
    console.log(this.divRef);
    console.log(this.divRef2);
    console.log(this.divRef3);
    
  }
  shouldComponentUpdate() {
    // return false;
    console.log('shouldComponentUpdate app')
    return true;
  }
  render() {
    const {type, t} = this.state;
    // debugger
    return (
      <div className="App">
        {/* {type === 2? null : <Hook type={type}/>} */}
        <ErrorBoundary2><BuggyCounter/></ErrorBoundary2>
        <ErrorBoundary2><BuggyCounterFun/></ErrorBoundary2>
        <ErrorBoundary2><Hook/></ErrorBoundary2>
        
        <div ref={this.divRef}>
          demo
        </div>
        <div onClick={this.onClickToRef}>查看ref内容</div>
        {/* <div className="flex">
          <div className="context">
          </div>
          <br/>
          <div className="context1">
          </div>
          <div className="context2">
          </div>

        </div>

        {type}
        <div ref={this.divRef}>
          demo
        </div>
        <div ref={this.divRef2}>
          demo2
        </div>
        <div ref={ref => this.divRef3 = ref}>
          demo3
        </div>
        <DCom myRef={this.divRef}/>
        <DCom myRef={this.divRef2}/>
        <DCom myRef={this.divRef3}/>
        <div onClick={this.onClickToRef}>查看ref内容</div> */}
        {/* <div className="flex">
          <div className="flex-1">
            <DCom name={type === 1 ? 'name1' : 'name2'}>
              <BCom/>
              <CCom/>
            </DCom>
            <div onClick={this.onClick.bind(this, 'type')}>切换</div>
          </div>
          <div className="flex-1">
            <D name={t === 1 ? 'name1' : 'name2'}>
              <B/>
              <C/>
            </D>
            <div onClick={this.onClick.bind(this, 't')}>切换</div>
          </div>
        </div> */}
        {/* {
          type === 1 ?
          <div>
            <ACom key='a'>
              <BCom key='b'/>
              <CCom key='c'/>
            </ACom>
          </div> : ''
        }
        {
          type !== 1 ?
          <ACom key='a'>
            <BCom key='b'/>
            <CCom key='c'/>
          </ACom> : ''
        } */}
        {/* <div>
          <ACom>
            {type === 1 ? <BCom key='b'/> : <CCom key='c'/>}
            {type !== 1 ? <BCom key='b'/> : <CCom key='c'/>}
          </ACom>
        </div> */}
        {/* <div>
          <ACom>
            {type === 1 ? <BCom /> : <CCom />}
            {type !== 1 ? <BCom /> : <CCom />}
            <DCom name={type === 1 ? '测试' : '测试2'}/>
          </ACom>
        </div> */}
        {/* {
          type === 1 ?
          <div>
            <ACom key='b'>
              <BCom key='b'/>
              <CCom key='c'/>
            </ACom>
          </div> : 
          <div>
            <ACom key='a'>
              <BCom key='b'/>
              <CCom key='c'/>
            </ACom>
          </div>
        } */}
      </div>
    );
  }
}

export default App;

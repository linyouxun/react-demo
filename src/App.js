import React from 'react';
import {ACom, BCom, CCom, DCom, A, B, C, D, Hook} from './compoments';
import './App.css';

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
    console.log(this.divRef);
    console.log(this.divRef2);
    console.log(this.divRef3);
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
    return (
      <div className="App">
        {/* {type === 2? null : <Hook type={type}/>} */}
        <Hook type={type}/>
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

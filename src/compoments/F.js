import React from 'react';

class F extends React.Component {
    state = {
        name: 'F'
    }
    constructor() {
        super()
        console.log('F')
    }
    click = async () => {
      this.setState({
        name: 'test'
      })
      var d = await new Promise(function(resolve, reject) {
        setTimeout(() => {
          resolve('data')
        }, 1000);
      })
      console.log(d)
      this.setState({
        name: d
      })

      var d2 = await new Promise(function(resolve, reject) {
        setTimeout(() => {
          resolve('data2')
        }, 1000);
      })
      console.log(d2)
      this.setState({
        name: d2
      })
    }
    render() {
      console.log('render', this.state);
      const { name } = this.state;
        return <div>
            <div> {this.state.name} </div>
            <div> {name} </div>
            <div onClick={this.click}>click</div>
        </div>
    }
}

export default F;
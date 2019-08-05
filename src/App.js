import React from 'react';
import { ContextDemo, ReactDemoContext } from './compoments'
import './App.css';

// const ReactDemoContext = React.createContext('nihao')


// import { Provider } from "react-redux";
// import store from "./store";

class App extends React.Component {
 
  render() {
    return (
      <ReactDemoContext.Provider value={{name: '1'}}>
        {/* <div className="App"> */}
          {/* <TodoList/> */}
          <ContextDemo/>
        {/* </div> */}
      </ReactDemoContext.Provider>
    );
  }
}

export default App;

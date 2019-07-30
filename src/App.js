import React from 'react';
import { TodoList } from './compoments'
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
 
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList/>
        </div>
      </Provider>
    );
  }
}

export default App;

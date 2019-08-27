import React from 'react';
import { F } from './compoments'
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
 
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <F/>
        </div>
      </Provider>
    );
  }
}

export default App;

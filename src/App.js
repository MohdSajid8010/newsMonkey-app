import './App.css';
import React, { Component } from 'react'
import Clock from './component/Clock';
import ErrBoundry from './component/ErrBoundry';

import NavBar from './component/NavBar';
import News from './component/News';

// rcc
class App extends Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <News />
      </div>
    )
  }
}
export default App;

// let api_key="92169e9419754e6a93c6dc5d5fc5f6f2"
{/* <ErrBoundry fallback={<h1>Something went wrong!</h1>}>
          <Clock />
   </ErrBoundry> */}

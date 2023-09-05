import './App.css';
import React, { Component } from 'react'
import Clock from './component/Clock';
import ErrBoundry from './component/ErrBoundry';

import NavBar from './component/NavBar';
import News from './component/News';
import Errorpage from "./component/Errorpage";
import About from "./component/About";

import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

// rcc
class App extends Component {

  // apiKey="92169e9419754e6a93c6dc5d5fc5f6f2";
  apiKey = process.env.REACT_APP_NEWS_API_KEY;


  state = { progress: 10, }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      < div className='App' >
        {console.log(this.apiKey)}
        <NavBar />
        <LoadingBar color='#f11946'  height="4px" progress={this.state.progress}/>
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={15} country="in" category="general" />} />
          <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={15} country="in" category="business" />} />
          <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={15} country="in" category="entertainment" />} />
          <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={15} country="in" category="health" />} />
          <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={15} country="in" category="science" />} />
          <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={15} country="in" category="sports" />} />
          <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={15} country="in" category="technology" />} />
          <Route path='*' element={<Errorpage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div >
    )
  }
}
export default App;

// let api_key="92169e9419754e6a93c6dc5d5fc5f6f2"
{/* <ErrBoundry fallback={<h1>Something went wrong!</h1>}>
          <Clock />
   </ErrBoundry> */}

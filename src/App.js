// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
// import Spinner from './components/Spinner.js';
import News from './components/News.js';
// import LoadingBar from 'react-top-loading-bar'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


const App=()=>  {

  // state = {
  //   progress:0
  // }
  // setProgress = (prog)=>{
  //   this.setState({
  //     progress:prog
  //   })
  // }

    return (
      <div>
        <Router>
          <Navbar />
          {/* <LoadingBar
            color='yellow'
            progress={this.state.progress}
          /> */}
          
          {/* <New  pageSize={6} catagory="sports" /> */}
          {/* <New  pageSize={6} catagory="technology" /> */}
          <Routes>
            <Route exact path="/" element={<News  key="general" pageSize={6} catagory="general" />} />
            <Route exact path="/" element={<News key="about" pageSize={6} catagory="about" />} ></Route>
            <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={6} catagory="entertainment" />} />
            <Route exact path="/business" element={<News  key="business" pageSize={6} catagory="business" />} ></Route>
            <Route exact path="/general" element={<News  key="general" pageSize={6} catagory="general" />} ></Route>
            <Route exact path="/health" element={<News  key="health" pageSize={6} catagory="health" />} ></Route>
            <Route exact path="/science" element={<News  key="science" pageSize={6} catagory="science" />} ></Route>
            <Route exact path="/sports" element={<News  key="sports" pageSize={6} catagory="sports" />} ></Route>
            <Route exact path="/technology" element={<News  key="technology" pageSize={6} catagory="technology" />} ></Route>
          </Routes>
        </Router>
      </div>
    )
  }


export default App
import './App.css';
import React, { Component } from 'react'
import Main from './mainbox/Main';
import Header from './header/Header';
import Search from './search/Search';
import Notics from './notics/Notics';
import Bottombar from './bottombar/Bottombar';
import Footer from './footer/Footer';
import Top from './top/Top';
import Login from './login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Top/>
        <Header/>
        <Routes>
          <Route path="/page/" element={<Home />}/>
          <Route path="/login/*" element={<Login />}/>
          <Route path="/Home/*" element={<Home />}/>
        </Routes>
        <Bottombar/>
        <Footer/>
  </BrowserRouter>
  // 2022.04.25 2차 수정
  // 04.26 3차 수정
  // 04.29 제출
    )
  }
}

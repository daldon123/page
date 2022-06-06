import React, { Component } from 'react'
import './top.css'
import $ from 'jquery'

export default class Top extends Component {

  componentDidMount(){
    const toplanguage = () =>{
      $('.languagebar-drop').hide();
      $('.languagebar').click(function(){
        $('.languagebar-drop').toggle();
      })
    }
    toplanguage();
  }

  render() {
    return (
      <div className='top'>
        <div className='topbar'>
            <div className='topthree'>
                <p>김포시</p>
                <p>시립도서관</p>
                <p>통합예약</p>
            </div>
            <div className='login'>
                <p>로그인 / 사이트맵</p>
                <div className='languagebar'>
                    <p>LANGUAGE</p>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className='languagebar-drop'>
                  <p>English</p>
                  <p>中國語</p>
                  <p>日本語</p>
                </div>
                <div className='login-searchbox'>
                    <input type="text" placeholder='검색어를 입력하세요' />
                    <i className="fa-solid fa-magnifying-glass login-search"></i>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import "./footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <img src="footer_logo.png" className='footerlogo'/>
          <div className='footercopy'>
            <div className='footercopy-top'>
                <p>개인정보처리방침</p>
                <p>원격관리</p>
                <p>홈페이지 개선의견</p>
                <p>저작권 정책</p>
                <p>뷰어다운로드</p>
            </div>
            <div className='footercopy-bottom'>
                <p>주소:장기도서관 10079 경기도 김포시 김포한강2로 42(장기동) 대표전화:031-5186-4680, FAX:031-5186-4689</p>
                <p>ⓒ GIMPO CITY All Rights Reserved</p>
            </div>
          </div>
      </div>
    )
  }
}
